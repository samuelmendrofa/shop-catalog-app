import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import axios from 'axios';

export default function App() {
  // ===== STATE UTAMA =====
  const [products, setProducts] = useState([]);                 // Data master asli dari API
  const [filteredProducts, setFilteredProducts] = useState([]);       // Data hasil filter/search
  const [loading, setLoading] = useState(true);                 // Loading State
  const [error, setError] = useState(null);                     // Error State
  const [refreshing, setRefreshing] = useState(false);           // Pull-to-Refresh State
  
  // ===== STATE FITUR TAMBAHAN =====
  const [searchQuery, setSearchQuery] = useState('');           // Fitur Search
  const [selectedCategory, setSelectedCategory] = useState('All'); // Fitur Kategori aktif
  const [categories, setCategories] = useState(['All']);         // List Kategori Dinamis
  const [selectedProduct, setSelectedProduct] = useState(null);   // Data untuk Layar Detail
  const [modalVisible, setModalVisible] = useState(false);       // Visibilitas Modal Detail

  // ===== FUNGSI FETCH DATA (MURNI AXIOS) =====
  async function fetchProducts() {
    try {
      if (!refreshing) setLoading(true);
      setError(null);

      // Ambil data produk dari FakeStore API
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;

      setProducts(data);
      
      // Ambil kategori unik secara dinamis dari data produk yang masuk
      const uniqueCategories = ['All', ...new Set(data.map((item) => item.category))];
      setCategories(uniqueCategories);

      // Terapkan filter & pencarian yang sedang aktif
      applyFilterAndSearch(data, searchQuery, selectedCategory);

    } catch (err) {
      setError('Gagal memuat produk. Periksa koneksi internetmu.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  // Ambil data sekali saat komponen pertama kali dimuat
  useEffect(() => {
    fetchProducts();
  }, []);

  // ===== FUNGSI EVALUASI FILTER & SEARCH =====
  function applyFilterAndSearch(masterData, searchTxt, category) {
    let temp = [...masterData];

    // 1. Filter berdasarkan Kategori
    if (category !== 'All') {
      temp = temp.filter((item) => item.category === category);
    }

    // 2. Filter berdasarkan Keyword Search
    if (searchTxt.trim() !== '') {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(searchTxt.toLowerCase())
      );
    }

    setFilteredProducts(temp);
  }

  // ===== HANDLER INPUT SEARCH =====
  function handleSearch(text) {
    setSearchQuery(text);
    applyFilterAndSearch(products, text, selectedCategory);
  }

  // ===== HANDLER PILIH KATEGORI =====
  function handleSelectCategory(category) {
    setSelectedCategory(category);
    applyFilterAndSearch(products, searchQuery, category);
  }

  // ===== HANDLER PULL TO REFRESH =====
  async function onRefresh() {
    setRefreshing(true);
    await fetchProducts();
  }

  // ===== HANDLER BUKA LAYAR DETAIL =====
  function openDetail(product) {
    setSelectedProduct(product);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER APLIKASI */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>🛒 ShopCatalog Ultra</Text>
      </View>

      {/* KONTROL PENCARIAN & KATEGORI (MUNCUL JIKA TIDAK ERROR/LOADING) */}
      {!loading && !error && (
        <View>
          {/* FITUR 1: SEARCH BAR */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Cari produk berdasarkan judul..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          {/* FITUR 2: CHIP KATEGORI (HORIZONTAL SCROLL) */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.categoryScroll}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, selectedCategory === cat && styles.chipActive]}
                onPress={() => handleSelectCategory(cat)}
              >
                <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>
                  {cat.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* KONDISI 1: LOADING STATE */}
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#00b894" />
          <Text style={styles.infoText}>Mengambil data katalog...</Text>
        </View>
      )}

      {/* KONDISI 2: ERROR STATE + BUTTON RETRY */}
      {!loading && error && (
        <View style={styles.center}>
          <Text style={styles.errorText}>😢 {error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={fetchProducts}>
            <Text style={styles.retryText}>🔄 Coba Lagi</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* KONDISI 3: SUCCESS STATE (FLATLIST DATA) */}
      {!loading && !error && (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 30 }}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListHeaderComponent={
            filteredProducts.length > 0 ? (
              <Text style={styles.listHeader}>{filteredProducts.length} Produk Ditemukan</Text>
            ) : null
          }
          
          // FITUR 3: EMPTY STATE (TAMPIL JIKA FILTER KOSONG)
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📦❌</Text>
              <Text style={styles.emptyText}>Produk Tidak Ditemukan</Text>
              <Text style={styles.emptySubtext}>
                Tidak ada produk di kategori "{selectedCategory}" yang cocok dengan kata kunci "{searchQuery}".
              </Text>
            </View>
          }

          // RENDER KARTU ITEM (BISA DI-TAP KE LAYAR DETAIL)
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => openDetail(item)}>
              <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.cardCategory}>{item.category.toUpperCase()}</Text>
                <Text style={styles.cardPrice}>${item.price}</Text>
                <Text style={styles.cardRating}>⭐ {item.rating.rate} ({item.rating.count} ulasan)</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* FITUR 4: LAYAR DETAIL (MODAL POP-UP) */}
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: selectedProduct.image }} style={styles.detailImage} resizeMode="contain" />
                <Text style={styles.detailTitle}>{selectedProduct.title}</Text>
                <Text style={styles.detailCategory}>{selectedProduct.category.toUpperCase()}</Text>
                <Text style={styles.detailPrice}>${selectedProduct.price}</Text>
                
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingBadgeText}>⭐ {selectedProduct.rating.rate} / 5.0 ({selectedProduct.rating.count} Penjualan)</Text>
                </View>

                <Text style={styles.detailSectionTitle}>Deskripsi Produk:</Text>
                <Text style={styles.detailDescription}>{selectedProduct.description}</Text>
              </ScrollView>

              <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeBtnText}>Kembali ke Katalog</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

// ===== STYLING MODERN =====
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 40 },
  headerContainer: { paddingHorizontal: 16, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0a2e0a', textAlign: 'center' },

  // Search & Filter Style
  searchContainer: { paddingHorizontal: 12, marginBottom: 10 },
  searchInput: { backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, fontSize: 15, borderWidth: 1, borderColor: '#ddd', color: '#333' },
  categoryScroll: { paddingHorizontal: 12, paddingBottom: 10 },
  chip: { backgroundColor: '#e0e0e0', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, marginRight: 8, borderWidth: 1, borderColor: '#ccc' },
  chipActive: { backgroundColor: '#0a2e0a', borderColor: '#0a2e0a' },
  chipText: { fontSize: 12, fontWeight: '600', color: '#555' },
  chipTextActive: { color: '#fff' },

  listHeader: { fontSize: 13, fontWeight: 'bold', color: '#666', marginBottom: 10, marginTop: 4 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  infoText: { fontSize: 15, color: '#555', marginTop: 12 },
  errorText: { fontSize: 15, color: '#e74c3c', textAlign: 'center', marginBottom: 16, paddingHorizontal: 20 },
  retryBtn: { backgroundColor: '#00b894', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 8 },
  retryText: { color: '#fff', fontWeight: 'bold' },

  // Card Style
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  cardImage: { width: 85, height: 85, marginRight: 12 },
  cardInfo: { flex: 1, justifyContent: 'center' },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#333' },
  cardCategory: { fontSize: 10, fontWeight: 'bold', color: '#888', marginTop: 2 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: '#00b894', marginTop: 4 },
  cardRating: { fontSize: 11, color: '#666', marginTop: 2 },

  // Empty State Style
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 50, paddingHorizontal: 30 },
  emptyIcon: { fontSize: 50, marginBottom: 12 },
  emptyText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  emptySubtext: { fontSize: 13, color: '#777', textAlign: 'center', marginTop: 6, lineHeight: 18 },

  // Layar Detail Modal Style
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, maxHeight: '85%' },
  detailImage: { width: '100%', height: 220, marginBottom: 16 },
  detailTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  detailCategory: { fontSize: 12, fontWeight: 'bold', color: '#888', marginBottom: 8 },
  detailPrice: { fontSize: 24, fontWeight: 'bold', color: '#00b894', marginBottom: 10 },
  ratingBadge: { backgroundColor: '#f0f0f0', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, marginBottom: 16 },
  ratingBadgeText: { fontSize: 12, color: '#444', fontWeight: '600' },
  detailSectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  detailDescription: { fontSize: 14, color: '#555', lineHeight: 20, marginBottom: 20 },
  closeBtn: { backgroundColor: '#0a2e0a', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  closeBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold' }
});