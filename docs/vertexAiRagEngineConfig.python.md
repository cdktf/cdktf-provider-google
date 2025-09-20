# `vertexAiRagEngineConfig` Submodule <a name="`vertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google.vertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagEngineConfig <a name="VertexAiRagEngineConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rag_managed_db_config: VertexAiRagEngineConfigRagManagedDbConfig,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiRagEngineConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig">put_rag_managed_db_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rag_managed_db_config` <a name="put_rag_managed_db_config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```python
def put_rag_managed_db_config(
  basic: VertexAiRagEngineConfigRagManagedDbConfigBasic = None,
  scaled: VertexAiRagEngineConfigRagManagedDbConfigScaled = None,
  unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = None
) -> None
```

###### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.basic"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}

---

###### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.scaled"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}

---

###### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putRagManagedDbConfig.parameter.unprovisioned"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiRagEngineConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput">rag_managed_db_config_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```python
rag_managed_db_config: VertexAiRagEngineConfigRagManagedDbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference">VertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeouts"></a>

```python
timeouts: VertexAiRagEngineConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference">VertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rag_managed_db_config_input`<sup>Optional</sup> <a name="rag_managed_db_config_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```python
rag_managed_db_config_input: VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VertexAiRagEngineConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagEngineConfigConfig <a name="VertexAiRagEngineConfigConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rag_managed_db_config: VertexAiRagEngineConfigRagManagedDbConfig,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiRagEngineConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region">region</a></code> | <code>str</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```python
rag_managed_db_config: VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#rag_managed_db_config VertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#id VertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#project VertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#region VertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigConfig.property.timeouts"></a>

```python
timeouts: VertexAiRagEngineConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#timeouts VertexAiRagEngineConfig#timeouts}

---

### VertexAiRagEngineConfigRagManagedDbConfig <a name="VertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig(
  basic: VertexAiRagEngineConfigRagManagedDbConfigBasic = None,
  scaled: VertexAiRagEngineConfigRagManagedDbConfigScaled = None,
  unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```python
basic: VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#basic VertexAiRagEngineConfig#basic}

---

##### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```python
scaled: VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#scaled VertexAiRagEngineConfig#scaled}

---

##### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```python
unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#unprovisioned VertexAiRagEngineConfig#unprovisioned}

---

### VertexAiRagEngineConfigRagManagedDbConfigBasic <a name="VertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic()
```


### VertexAiRagEngineConfigRagManagedDbConfigScaled <a name="VertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled()
```


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned()
```


### VertexAiRagEngineConfigTimeouts <a name="VertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#create VertexAiRagEngineConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#delete VertexAiRagEngineConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/vertex_ai_rag_engine_config#update VertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">put_scaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">put_unprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">reset_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">reset_scaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">reset_unprovisioned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic` <a name="put_basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```python
def put_basic() -> None
```

##### `put_scaled` <a name="put_scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```python
def put_scaled() -> None
```

##### `put_unprovisioned` <a name="put_unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```python
def put_unprovisioned() -> None
```

##### `reset_basic` <a name="reset_basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```python
def reset_basic() -> None
```

##### `reset_scaled` <a name="reset_scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```python
def reset_scaled() -> None
```

##### `reset_unprovisioned` <a name="reset_unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```python
def reset_unprovisioned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">basic_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">scaled_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">unprovisioned_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```python
basic: VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">VertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `scaled`<sup>Required</sup> <a name="scaled" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```python
scaled: VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `unprovisioned`<sup>Required</sup> <a name="unprovisioned" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```python
unprovisioned: VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```python
basic_input: VertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigBasic">VertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `scaled_input`<sup>Optional</sup> <a name="scaled_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```python
scaled_input: VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `unprovisioned_input`<sup>Optional</sup> <a name="unprovisioned_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```python
unprovisioned_input: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfig">VertexAiRagEngineConfigRagManagedDbConfig</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigScaled">VertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">VertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### VertexAiRagEngineConfigTimeoutsOutputReference <a name="VertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_rag_engine_config

vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiRagEngineConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiRagEngineConfig.VertexAiRagEngineConfigTimeouts">VertexAiRagEngineConfigTimeouts</a>]

---



