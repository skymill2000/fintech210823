from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get(
    'https://www.melon.com/chart/index.htm')
tableBody = driver.find_element_by_xpath('//*[@id="frm"]/div/table/tbody')
rows = driver.find_elements_by_tag_name('tr')
for index, value in enumerate(rows):
    if index != 0:
        rowNo = value.find_elements_by_tag_name('td')[4]
        address = value.find_elements_by_tag_name('td')[5]
        homeType = value.find_elements_by_tag_name('td')[6]
        print(rowNo.text + address.text + homeType.text)
