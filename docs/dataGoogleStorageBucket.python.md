# `data_google_storage_bucket`

Refer to the Terraform Registory for docs: [`data_google_storage_bucket`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket).

# `dataGoogleStorageBucket` Submodule <a name="`dataGoogleStorageBucket` Submodule" id="@cdktf/provider-google.dataGoogleStorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucket <a name="DataGoogleStorageBucket" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#id DataGoogleStorageBucket#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.name"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#name DataGoogleStorageBucket#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#id DataGoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucket.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList">DataGoogleStorageBucketAutoclassList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList">DataGoogleStorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList">DataGoogleStorageBucketCustomPlacementConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.defaultEventBasedHold">default_event_based_hold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList">DataGoogleStorageBucketEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forceDestroy">force_destroy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList">DataGoogleStorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList">DataGoogleStorageBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.requesterPays">requester_pays</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList">DataGoogleStorageBucketRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList">DataGoogleStorageBucketVersioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList">DataGoogleStorageBucketWebsiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.autoclass"></a>

```python
autoclass: DataGoogleStorageBucketAutoclassList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList">DataGoogleStorageBucketAutoclassList</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cors"></a>

```python
cors: DataGoogleStorageBucketCorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList">DataGoogleStorageBucketCorsList</a>

---

##### `custom_placement_config`<sup>Required</sup> <a name="custom_placement_config" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.customPlacementConfig"></a>

```python
custom_placement_config: DataGoogleStorageBucketCustomPlacementConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList">DataGoogleStorageBucketCustomPlacementConfigList</a>

---

##### `default_event_based_hold`<sup>Required</sup> <a name="default_event_based_hold" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.defaultEventBasedHold"></a>

```python
default_event_based_hold: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.encryption"></a>

```python
encryption: DataGoogleStorageBucketEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList">DataGoogleStorageBucketEncryptionList</a>

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forceDestroy"></a>

```python
force_destroy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: DataGoogleStorageBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList">DataGoogleStorageBucketLifecycleRuleList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.logging"></a>

```python
logging: DataGoogleStorageBucketLoggingList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList">DataGoogleStorageBucketLoggingList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_access_prevention`<sup>Required</sup> <a name="public_access_prevention" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.publicAccessPrevention"></a>

```python
public_access_prevention: str
```

- *Type:* str

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.requesterPays"></a>

```python
requester_pays: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.retentionPolicy"></a>

```python
retention_policy: DataGoogleStorageBucketRetentionPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList">DataGoogleStorageBucketRetentionPolicyList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `uniform_bucket_level_access`<sup>Required</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.uniformBucketLevelAccess"></a>

```python
uniform_bucket_level_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.versioning"></a>

```python
versioning: DataGoogleStorageBucketVersioningList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList">DataGoogleStorageBucketVersioningList</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.website"></a>

```python
website: DataGoogleStorageBucketWebsiteList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList">DataGoogleStorageBucketWebsiteList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketAutoclass <a name="DataGoogleStorageBucketAutoclass" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass()
```


### DataGoogleStorageBucketConfig <a name="DataGoogleStorageBucketConfig" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#id DataGoogleStorageBucket#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#name DataGoogleStorageBucket#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/storage_bucket#id DataGoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageBucketCors <a name="DataGoogleStorageBucketCors" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCors()
```


### DataGoogleStorageBucketCustomPlacementConfig <a name="DataGoogleStorageBucketCustomPlacementConfig" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig()
```


### DataGoogleStorageBucketEncryption <a name="DataGoogleStorageBucketEncryption" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketEncryption()
```


### DataGoogleStorageBucketLifecycleRule <a name="DataGoogleStorageBucketLifecycleRule" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule()
```


### DataGoogleStorageBucketLifecycleRuleAction <a name="DataGoogleStorageBucketLifecycleRuleAction" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction()
```


### DataGoogleStorageBucketLifecycleRuleCondition <a name="DataGoogleStorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition()
```


### DataGoogleStorageBucketLogging <a name="DataGoogleStorageBucketLogging" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLogging()
```


### DataGoogleStorageBucketRetentionPolicy <a name="DataGoogleStorageBucketRetentionPolicy" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy()
```


### DataGoogleStorageBucketVersioning <a name="DataGoogleStorageBucketVersioning" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketVersioning()
```


### DataGoogleStorageBucketWebsite <a name="DataGoogleStorageBucketWebsite" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketWebsite()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketAutoclassList <a name="DataGoogleStorageBucketAutoclassList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketAutoclassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketAutoclassOutputReference <a name="DataGoogleStorageBucketAutoclassOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass">DataGoogleStorageBucketAutoclass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass">DataGoogleStorageBucketAutoclass</a>

---


### DataGoogleStorageBucketCorsList <a name="DataGoogleStorageBucketCorsList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketCorsOutputReference <a name="DataGoogleStorageBucketCorsOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.responseHeader">response_header</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCors">DataGoogleStorageBucketCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.responseHeader"></a>

```python
response_header: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketCors
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCors">DataGoogleStorageBucketCors</a>

---


### DataGoogleStorageBucketCustomPlacementConfigList <a name="DataGoogleStorageBucketCustomPlacementConfigList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketCustomPlacementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketCustomPlacementConfigOutputReference <a name="DataGoogleStorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations">data_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig">DataGoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```python
data_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig">DataGoogleStorageBucketCustomPlacementConfig</a>

---


### DataGoogleStorageBucketEncryptionList <a name="DataGoogleStorageBucketEncryptionList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketEncryptionOutputReference <a name="DataGoogleStorageBucketEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName">default_kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption">DataGoogleStorageBucketEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```python
default_kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption">DataGoogleStorageBucketEncryption</a>

---


### DataGoogleStorageBucketLifecycleRuleActionList <a name="DataGoogleStorageBucketLifecycleRuleActionList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketLifecycleRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketLifecycleRuleActionOutputReference <a name="DataGoogleStorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction">DataGoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction">DataGoogleStorageBucketLifecycleRuleAction</a>

---


### DataGoogleStorageBucketLifecycleRuleConditionList <a name="DataGoogleStorageBucketLifecycleRuleConditionList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketLifecycleRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketLifecycleRuleConditionOutputReference <a name="DataGoogleStorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">custom_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">days_since_custom_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">days_since_noncurrent_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matches_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matches_storage_class</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matches_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrent_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">num_newer_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState">with_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition">DataGoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```python
age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `custom_time_before`<sup>Required</sup> <a name="custom_time_before" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```python
custom_time_before: str
```

- *Type:* str

---

##### `days_since_custom_time`<sup>Required</sup> <a name="days_since_custom_time" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```python
days_since_custom_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_since_noncurrent_time`<sup>Required</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```python
days_since_noncurrent_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matches_prefix`<sup>Required</sup> <a name="matches_prefix" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```python
matches_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_storage_class`<sup>Required</sup> <a name="matches_storage_class" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```python
matches_storage_class: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_suffix`<sup>Required</sup> <a name="matches_suffix" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```python
matches_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `noncurrent_time_before`<sup>Required</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```python
noncurrent_time_before: str
```

- *Type:* str

---

##### `num_newer_versions`<sup>Required</sup> <a name="num_newer_versions" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```python
num_newer_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_state`<sup>Required</sup> <a name="with_state" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```python
with_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition">DataGoogleStorageBucketLifecycleRuleCondition</a>

---


### DataGoogleStorageBucketLifecycleRuleList <a name="DataGoogleStorageBucketLifecycleRuleList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketLifecycleRuleOutputReference <a name="DataGoogleStorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList">DataGoogleStorageBucketLifecycleRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList">DataGoogleStorageBucketLifecycleRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule">DataGoogleStorageBucketLifecycleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.action"></a>

```python
action: DataGoogleStorageBucketLifecycleRuleActionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList">DataGoogleStorageBucketLifecycleRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.condition"></a>

```python
condition: DataGoogleStorageBucketLifecycleRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList">DataGoogleStorageBucketLifecycleRuleConditionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketLifecycleRule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule">DataGoogleStorageBucketLifecycleRule</a>

---


### DataGoogleStorageBucketLoggingList <a name="DataGoogleStorageBucketLoggingList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketLoggingOutputReference <a name="DataGoogleStorageBucketLoggingOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logObjectPrefix">log_object_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLogging">DataGoogleStorageBucketLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `log_object_prefix`<sup>Required</sup> <a name="log_object_prefix" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```python
log_object_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketLogging">DataGoogleStorageBucketLogging</a>

---


### DataGoogleStorageBucketRetentionPolicyList <a name="DataGoogleStorageBucketRetentionPolicyList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketRetentionPolicyOutputReference <a name="DataGoogleStorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.isLocked">is_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy">DataGoogleStorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_locked`<sup>Required</sup> <a name="is_locked" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```python
is_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy">DataGoogleStorageBucketRetentionPolicy</a>

---


### DataGoogleStorageBucketVersioningList <a name="DataGoogleStorageBucketVersioningList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketVersioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketVersioningOutputReference <a name="DataGoogleStorageBucketVersioningOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning">DataGoogleStorageBucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning">DataGoogleStorageBucketVersioning</a>

---


### DataGoogleStorageBucketWebsiteList <a name="DataGoogleStorageBucketWebsiteList" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageBucketWebsiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageBucketWebsiteOutputReference <a name="DataGoogleStorageBucketWebsiteOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_storage_bucket

dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix">main_page_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.notFoundPage">not_found_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite">DataGoogleStorageBucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `main_page_suffix`<sup>Required</sup> <a name="main_page_suffix" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```python
main_page_suffix: str
```

- *Type:* str

---

##### `not_found_page`<sup>Required</sup> <a name="not_found_page" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```python
not_found_page: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite">DataGoogleStorageBucketWebsite</a>

---



