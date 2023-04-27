# `data_google_container_engine_versions`

Refer to the Terraform Registory for docs: [`data_google_container_engine_versions`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions).

# `dataGoogleContainerEngineVersions` Submodule <a name="`dataGoogleContainerEngineVersions` Submodule" id="@cdktf/provider-google.dataGoogleContainerEngineVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerEngineVersions <a name="DataGoogleContainerEngineVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions google_container_engine_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_engine_versions

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions(
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
  location: str = None,
  project: str = None,
  version_prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.versionPrefix">version_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}.

---

##### `version_prefix`<sup>Optional</sup> <a name="version_prefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.versionPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix">reset_version_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_version_prefix` <a name="reset_version_prefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix"></a>

```python
def reset_version_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_engine_versions

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_engine_versions

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_engine_versions

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion">default_cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion">latest_master_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion">latest_node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion">release_channel_default_version</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion">release_channel_latest_version</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions">valid_master_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions">valid_node_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput">version_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix">version_prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_cluster_version`<sup>Required</sup> <a name="default_cluster_version" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion"></a>

```python
default_cluster_version: str
```

- *Type:* str

---

##### `latest_master_version`<sup>Required</sup> <a name="latest_master_version" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion"></a>

```python
latest_master_version: str
```

- *Type:* str

---

##### `latest_node_version`<sup>Required</sup> <a name="latest_node_version" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion"></a>

```python
latest_node_version: str
```

- *Type:* str

---

##### `release_channel_default_version`<sup>Required</sup> <a name="release_channel_default_version" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion"></a>

```python
release_channel_default_version: StringMap
```

- *Type:* cdktf.StringMap

---

##### `release_channel_latest_version`<sup>Required</sup> <a name="release_channel_latest_version" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion"></a>

```python
release_channel_latest_version: StringMap
```

- *Type:* cdktf.StringMap

---

##### `valid_master_versions`<sup>Required</sup> <a name="valid_master_versions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions"></a>

```python
valid_master_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_node_versions`<sup>Required</sup> <a name="valid_node_versions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions"></a>

```python
valid_node_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `version_prefix_input`<sup>Optional</sup> <a name="version_prefix_input" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput"></a>

```python
version_prefix_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version_prefix`<sup>Required</sup> <a name="version_prefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix"></a>

```python
version_prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerEngineVersionsConfig <a name="DataGoogleContainerEngineVersionsConfig" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_container_engine_versions

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  location: str = None,
  project: str = None,
  version_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix">version_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}.

---

##### `version_prefix`<sup>Optional</sup> <a name="version_prefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix"></a>

```python
version_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}.

---



