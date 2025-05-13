# `dataGoogleKmsCryptoKeyLatestVersion` Submodule <a name="`dataGoogleKmsCryptoKeyLatestVersion` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyLatestVersion <a name="DataGoogleKmsCryptoKeyLatestVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version google_kms_crypto_key_latest_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  filter: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.cryptoKey">crypto_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.cryptoKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.filter"></a>

- *Type:* str

The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering.

Example filter values if filtering on state.

* "state:ENABLED" will retrieve the latest cryptoKeyVersion that has the state "ENABLED".

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#filter DataGoogleKmsCryptoKeyLatestVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeyLatestVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeyLatestVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleKmsCryptoKeyLatestVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleKmsCryptoKeyLatestVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeyLatestVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.publicKey">public_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList">DataGoogleKmsCryptoKeyLatestVersionPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKeyInput">crypto_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKey">crypto_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.publicKey"></a>

```python
public_key: DataGoogleKmsCryptoKeyLatestVersionPublicKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList">DataGoogleKmsCryptoKeyLatestVersionPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crypto_key_input`<sup>Optional</sup> <a name="crypto_key_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKeyInput"></a>

```python
crypto_key_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyLatestVersionConfig <a name="DataGoogleKmsCryptoKeyLatestVersionConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  filter: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.cryptoKey">crypto_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.filter">filter</a></code> | <code>str</code> | The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering.

Example filter values if filtering on state.

* "state:ENABLED" will retrieve the latest cryptoKeyVersion that has the state "ENABLED".

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#filter DataGoogleKmsCryptoKeyLatestVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyLatestVersionPublicKey <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyLatestVersionPublicKeyList <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_key_latest_version

dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.pem">pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey">DataGoogleKmsCryptoKeyLatestVersionPublicKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.pem"></a>

```python
pem: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleKmsCryptoKeyLatestVersionPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey">DataGoogleKmsCryptoKeyLatestVersionPublicKey</a>

---



