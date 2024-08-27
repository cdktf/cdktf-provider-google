# `vertexAiDeploymentResourcePool` Submodule <a name="`vertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google.vertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiDeploymentResourcePool <a name="VertexAiDeploymentResourcePool" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool(
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
  dedicated_resources: VertexAiDeploymentResourcePoolDedicatedResources = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiDeploymentResourcePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.name"></a>

- *Type:* str

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#name VertexAiDeploymentResourcePool#name}

---

##### `dedicated_resources`<sup>Optional</sup> <a name="dedicated_resources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#dedicated_resources VertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.region"></a>

- *Type:* str

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#region VertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#timeouts VertexAiDeploymentResourcePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources">put_dedicated_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetDedicatedResources">reset_dedicated_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dedicated_resources` <a name="put_dedicated_resources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources"></a>

```python
def put_dedicated_resources(
  machine_spec: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec,
  min_replica_count: typing.Union[int, float],
  autoscaling_metric_specs: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]] = None,
  max_replica_count: typing.Union[int, float] = None
) -> None
```

###### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#machine_spec VertexAiDeploymentResourcePool#machine_spec}

---

###### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources.parameter.minReplicaCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#min_replica_count VertexAiDeploymentResourcePool#min_replica_count}

---

###### `autoscaling_metric_specs`<sup>Optional</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources.parameter.autoscalingMetricSpecs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#autoscaling_metric_specs VertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

###### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putDedicatedResources.parameter.maxReplicaCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#max_replica_count VertexAiDeploymentResourcePool#max_replica_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}.

---

##### `reset_dedicated_resources` <a name="reset_dedicated_resources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```python
def reset_dedicated_resources() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiDeploymentResourcePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference">VertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResourcesInput">dedicated_resources_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dedicated_resources`<sup>Required</sup> <a name="dedicated_resources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```python
dedicated_resources: VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeouts"></a>

```python
timeouts: VertexAiDeploymentResourcePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference">VertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `dedicated_resources_input`<sup>Optional</sup> <a name="dedicated_resources_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```python
dedicated_resources_input: VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VertexAiDeploymentResourcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiDeploymentResourcePoolConfig <a name="VertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  dedicated_resources: VertexAiDeploymentResourcePoolDedicatedResources = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiDeploymentResourcePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.name">name</a></code> | <code>str</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.region">region</a></code> | <code>str</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#name VertexAiDeploymentResourcePool#name}

---

##### `dedicated_resources`<sup>Optional</sup> <a name="dedicated_resources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```python
dedicated_resources: VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#dedicated_resources VertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#region VertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```python
timeouts: VertexAiDeploymentResourcePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#timeouts VertexAiDeploymentResourcePool#timeouts}

---

### VertexAiDeploymentResourcePoolDedicatedResources <a name="VertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources(
  machine_spec: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec,
  min_replica_count: typing.Union[int, float],
  autoscaling_metric_specs: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]] = None,
  max_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">autoscaling_metric_specs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```python
machine_spec: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#machine_spec VertexAiDeploymentResourcePool#machine_spec}

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#min_replica_count VertexAiDeploymentResourcePool#min_replica_count}

---

##### `autoscaling_metric_specs`<sup>Optional</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```python
autoscaling_metric_specs: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#autoscaling_metric_specs VertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#max_replica_count VertexAiDeploymentResourcePool#max_replica_count}

---

### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs(
  metric_name: str,
  target: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">metric_name</a></code> | <code>str</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">target</a></code> | <code>typing.Union[int, float]</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#metric_name VertexAiDeploymentResourcePool#metric_name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#target VertexAiDeploymentResourcePool#target}

---

### VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_count VertexAiDeploymentResourcePool#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_type VertexAiDeploymentResourcePool#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#machine_type VertexAiDeploymentResourcePool#machine_type}

---

### VertexAiDeploymentResourcePoolTimeouts <a name="VertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---


### VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]

---


### VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">put_autoscaling_metric_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">reset_autoscaling_metric_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">reset_max_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_metric_specs` <a name="put_autoscaling_metric_specs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```python
def put_autoscaling_metric_specs(
  value: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_count VertexAiDeploymentResourcePool#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_type VertexAiDeploymentResourcePool#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/vertex_ai_deployment_resource_pool#machine_type VertexAiDeploymentResourcePool#machine_type}

---

##### `reset_autoscaling_metric_specs` <a name="reset_autoscaling_metric_specs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```python
def reset_autoscaling_metric_specs() -> None
```

##### `reset_max_replica_count` <a name="reset_max_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```python
def reset_max_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">autoscaling_metric_specs</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">autoscaling_metric_specs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_metric_specs`<sup>Required</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```python
autoscaling_metric_specs: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```python
machine_spec: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `autoscaling_metric_specs_input`<sup>Optional</sup> <a name="autoscaling_metric_specs_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```python
autoscaling_metric_specs_input: typing.Union[IResolvable, typing.List[VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```python
min_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolDedicatedResources">VertexAiDeploymentResourcePoolDedicatedResources</a>

---


### VertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="VertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_deployment_resource_pool

vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiDeploymentResourcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiDeploymentResourcePool.VertexAiDeploymentResourcePoolTimeouts">VertexAiDeploymentResourcePoolTimeouts</a>]

---



