# `data_google_app_engine_default_service_account`

Refer to the Terraform Registory for docs: [`data_google_app_engine_default_service_account`](https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account).

# `dataGoogleAppEngineDefaultServiceAccount` Submodule <a name="`dataGoogleAppEngineDefaultServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAppEngineDefaultServiceAccount <a name="DataGoogleAppEngineDefaultServiceAccount" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account google_app_engine_default_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_app_engine_default_service_account

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_app_engine_default_service_account

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_app_engine_default_service_account

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_app_engine_default_service_account

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAppEngineDefaultServiceAccountConfig <a name="DataGoogleAppEngineDefaultServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_app_engine_default_service_account

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}.

---



