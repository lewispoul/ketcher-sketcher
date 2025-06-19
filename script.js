let ketcher;
window.onload = async () => {
  const options = {
    resourcesUrl: 'https://lifescience.opensource.epam.com/ketcher'
  };
  ketcher = await Ketcher.create(document.getElementById('ketcher'), options);
};

function exportMol() {
  ketcher.getMolfile().then(molfile => {
    document.getElementById('output').value = molfile;
  });
}

function exportSmiles() {
  ketcher.getSmiles().then(smiles => {
    document.getElementById('output').value = smiles;
  });
}
