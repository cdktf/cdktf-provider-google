# `dataGoogleKmsCryptoKeys` Submodule <a name="`dataGoogleKmsCryptoKeys` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeys <a name="DataGoogleKmsCryptoKeys" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys google_kms_crypto_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_ring: str,
  filter: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.keyRing">key_ring</a></code> | <code>str</code> | The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.keyRing"></a>

- *Type:* str

The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#key_ring DataGoogleKmsCryptoKeys#key_ring}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.filter"></a>

- *Type:* str

The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:.

* "name:my-key-" will retrieve keys that contain "my-key-" anywhere in their name. Note: names take the form projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}.
* "name=projects/my-project/locations/global/keyRings/my-key-ring/cryptoKeys/my-key-1" will only retrieve a key with that exact name.

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#filter DataGoogleKmsCryptoKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleKmsCryptoKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleKmsCryptoKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput">key_ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing">key_ring</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys"></a>

```python
keys: DataGoogleKmsCryptoKeysKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_ring_input`<sup>Optional</sup> <a name="key_ring_input" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput"></a>

```python
key_ring_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeysConfig <a name="DataGoogleKmsCryptoKeysConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_ring: str,
  filter: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing">key_ring</a></code> | <code>str</code> | The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter">filter</a></code> | <code>str</code> | The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#key_ring DataGoogleKmsCryptoKeys#key_ring}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:.

* "name:my-key-" will retrieve keys that contain "my-key-" anywhere in their name. Note: names take the form projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}.
* "name=projects/my-project/locations/global/keyRings/my-key-ring/cryptoKeys/my-key-1" will only retrieve a key with that exact name.

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#filter DataGoogleKmsCryptoKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeysKeys <a name="DataGoogleKmsCryptoKeysKeys" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys()
```


### DataGoogleKmsCryptoKeysKeysPrimary <a name="DataGoogleKmsCryptoKeysKeysPrimary" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary()
```


### DataGoogleKmsCryptoKeysKeysVersionTemplate <a name="DataGoogleKmsCryptoKeysKeysVersionTemplate" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeysKeysList <a name="DataGoogleKmsCryptoKeysKeysList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleKmsCryptoKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleKmsCryptoKeysKeysOutputReference <a name="DataGoogleKmsCryptoKeysKeysOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend">crypto_key_backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration">destroy_scheduled_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly">import_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing">key_ring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation">skip_initial_version_creation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate">version_template</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crypto_key_backend`<sup>Required</sup> <a name="crypto_key_backend" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend"></a>

```python
crypto_key_backend: str
```

- *Type:* str

---

##### `destroy_scheduled_duration`<sup>Required</sup> <a name="destroy_scheduled_duration" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration"></a>

```python
destroy_scheduled_duration: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_only`<sup>Required</sup> <a name="import_only" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly"></a>

```python
import_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary"></a>

```python
primary: DataGoogleKmsCryptoKeysKeysPrimaryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a>

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `skip_initial_version_creation`<sup>Required</sup> <a name="skip_initial_version_creation" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation"></a>

```python
skip_initial_version_creation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `version_template`<sup>Required</sup> <a name="version_template" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate"></a>

```python
version_template: DataGoogleKmsCryptoKeysKeysVersionTemplateList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleKmsCryptoKeysKeys
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a>

---


### DataGoogleKmsCryptoKeysKeysPrimaryList <a name="DataGoogleKmsCryptoKeysKeysPrimaryList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleKmsCryptoKeysKeysPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleKmsCryptoKeysKeysPrimaryOutputReference <a name="DataGoogleKmsCryptoKeysKeysPrimaryOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleKmsCryptoKeysKeysPrimary
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a>

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateList <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_kms_crypto_keys

dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleKmsCryptoKeysKeysVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a>

---



