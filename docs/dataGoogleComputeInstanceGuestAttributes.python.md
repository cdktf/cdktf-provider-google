# `dataGoogleComputeInstanceGuestAttributes` Submodule <a name="`dataGoogleComputeInstanceGuestAttributes` Submodule" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGuestAttributes <a name="DataGoogleComputeInstanceGuestAttributes" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes google_compute_instance_guest_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes(
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
  id: str = None,
  project: str = None,
  query_path: str = None,
  region: str = None,
  variable_key: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.queryPath">query_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.variableKey">variable_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}.

---

##### `query_path`<sup>Optional</sup> <a name="query_path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.queryPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}.

---

##### `variable_key`<sup>Optional</sup> <a name="variable_key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.variableKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath">reset_query_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey">reset_variable_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_query_path` <a name="reset_query_path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath"></a>

```python
def reset_query_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_variable_key` <a name="reset_variable_key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey"></a>

```python
def reset_variable_key() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeInstanceGuestAttributes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeInstanceGuestAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGuestAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue">query_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue">variable_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput">query_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput">variable_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath">query_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey">variable_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `query_value`<sup>Required</sup> <a name="query_value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue"></a>

```python
query_value: DataGoogleComputeInstanceGuestAttributesQueryValueList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a>

---

##### `variable_value`<sup>Required</sup> <a name="variable_value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue"></a>

```python
variable_value: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_path_input`<sup>Optional</sup> <a name="query_path_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput"></a>

```python
query_path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `variable_key_input`<sup>Optional</sup> <a name="variable_key_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput"></a>

```python
variable_key_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `query_path`<sup>Required</sup> <a name="query_path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath"></a>

```python
query_path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `variable_key`<sup>Required</sup> <a name="variable_key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey"></a>

```python
variable_key: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGuestAttributesConfig <a name="DataGoogleComputeInstanceGuestAttributesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  query_path: str = None,
  region: str = None,
  variable_key: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath">query_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey">variable_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}.

---

##### `query_path`<sup>Optional</sup> <a name="query_path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath"></a>

```python
query_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}.

---

##### `variable_key`<sup>Optional</sup> <a name="variable_key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey"></a>

```python
variable_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}.

---

### DataGoogleComputeInstanceGuestAttributesQueryValue <a name="DataGoogleComputeInstanceGuestAttributesQueryValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGuestAttributesQueryValueList <a name="DataGoogleComputeInstanceGuestAttributesQueryValueList" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference <a name="DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_instance_guest_attributes

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGuestAttributesQueryValue
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a>

---



