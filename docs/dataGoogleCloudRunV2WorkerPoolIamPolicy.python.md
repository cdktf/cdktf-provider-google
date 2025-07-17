# `dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule <a name="`dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicy <a name="DataGoogleCloudRunV2WorkerPoolIamPolicy" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy google_cloud_run_v2_worker_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy(
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
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudRunV2WorkerPoolIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudRunV2WorkerPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunV2WorkerPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicyConfig <a name="DataGoogleCloudRunV2WorkerPoolIamPolicyConfig" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_run_v2_worker_pool_iam_policy

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}.

---



