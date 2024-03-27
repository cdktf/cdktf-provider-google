# `dataGoogleApphubDiscoveredWorkload` Submodule <a name="`dataGoogleApphubDiscoveredWorkload` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredWorkload <a name="DataGoogleApphubDiscoveredWorkload" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload google_apphub_discovered_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  workload_uri: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.workloadUri">workload_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `workload_uri`<sup>Required</sup> <a name="workload_uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.workloadUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleApphubDiscoveredWorkload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleApphubDiscoveredWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties">workload_properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference">workload_reference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput">workload_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri">workload_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workload_properties`<sup>Required</sup> <a name="workload_properties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties"></a>

```python
workload_properties: DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a>

---

##### `workload_reference`<sup>Required</sup> <a name="workload_reference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference"></a>

```python
workload_reference: DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `workload_uri_input`<sup>Optional</sup> <a name="workload_uri_input" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput"></a>

```python
workload_uri_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_uri`<sup>Required</sup> <a name="workload_uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri"></a>

```python
workload_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredWorkloadConfig <a name="DataGoogleApphubDiscoveredWorkloadConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  workload_uri: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri">workload_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `workload_uri`<sup>Required</sup> <a name="workload_uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri"></a>

```python
workload_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

### DataGoogleApphubDiscoveredWorkloadWorkloadProperties <a name="DataGoogleApphubDiscoveredWorkloadWorkloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties()
```


### DataGoogleApphubDiscoveredWorkloadWorkloadReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject">gcp_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_project`<sup>Required</sup> <a name="gcp_project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```python
gcp_project: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleApphubDiscoveredWorkloadWorkloadProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a>

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_apphub_discovered_workload

dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleApphubDiscoveredWorkloadWorkloadReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a>

---



