# `composerUserWorkloadsConfigMap` Submodule <a name="`composerUserWorkloadsConfigMap` Submodule" id="@cdktf/provider-google.composerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerUserWorkloadsConfigMap <a name="ComposerUserWorkloadsConfigMap" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  name: str,
  data: typing.Mapping[str] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComposerUserWorkloadsConfigMapTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.data">data</a></code> | <code>typing.Mapping[str]</code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.region">region</a></code> | <code>str</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.environment"></a>

- *Type:* str

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#environment ComposerUserWorkloadsConfigMap#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.name"></a>

- *Type:* str

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#name ComposerUserWorkloadsConfigMap#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.data"></a>

- *Type:* typing.Mapping[str]

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#data ComposerUserWorkloadsConfigMap#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.region"></a>

- *Type:* str

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#region ComposerUserWorkloadsConfigMap#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#timeouts ComposerUserWorkloadsConfigMap#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}.

---

##### `reset_data` <a name="reset_data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComposerUserWorkloadsConfigMap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput">data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data">data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts"></a>

```python
timeouts: ComposerUserWorkloadsConfigMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput"></a>

```python
data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComposerUserWorkloadsConfigMapTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerUserWorkloadsConfigMapConfig <a name="ComposerUserWorkloadsConfigMapConfig" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  name: str,
  data: typing.Mapping[str] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComposerUserWorkloadsConfigMapTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment">environment</a></code> | <code>str</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name">name</a></code> | <code>str</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data">data</a></code> | <code>typing.Mapping[str]</code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region">region</a></code> | <code>str</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#environment ComposerUserWorkloadsConfigMap#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#name ComposerUserWorkloadsConfigMap#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#data ComposerUserWorkloadsConfigMap#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#region ComposerUserWorkloadsConfigMap#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts"></a>

```python
timeouts: ComposerUserWorkloadsConfigMapTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#timeouts ComposerUserWorkloadsConfigMap#timeouts}

---

### ComposerUserWorkloadsConfigMapTimeouts <a name="ComposerUserWorkloadsConfigMapTimeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerUserWorkloadsConfigMapTimeoutsOutputReference <a name="ComposerUserWorkloadsConfigMapTimeoutsOutputReference" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_user_workloads_config_map

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComposerUserWorkloadsConfigMapTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>]

---



