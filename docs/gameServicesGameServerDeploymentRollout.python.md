# `google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout).

# `gameServicesGameServerDeploymentRollout` Submodule <a name="`gameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerDeploymentRollout <a name="GameServicesGameServerDeploymentRollout" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_game_server_config: str,
  deployment_id: str,
  game_server_config_overrides: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]] = None,
  id: str = None,
  project: str = None,
  timeouts: GameServicesGameServerDeploymentRolloutTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig"></a>

- *Type:* str

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId"></a>

- *Type:* str

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}

---

##### `game_server_config_overrides`<sup>Optional</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">put_game_server_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">reset_game_server_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_game_server_config_overrides` <a name="put_game_server_config_overrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```python
def put_game_server_config_overrides(
  value: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}.

---

##### `reset_game_server_config_overrides` <a name="reset_game_server_config_overrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```python
def reset_game_server_config_overrides() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">default_game_server_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">game_server_config_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `game_server_config_overrides`<sup>Required</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```python
game_server_config_overrides: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts"></a>

```python
timeouts: GameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `default_game_server_config_input`<sup>Optional</sup> <a name="default_game_server_config_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```python
default_game_server_config_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `game_server_config_overrides_input`<sup>Optional</sup> <a name="game_server_config_overrides_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```python
game_server_config_overrides_input: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GameServicesGameServerDeploymentRolloutTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```python
default_game_server_config: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerDeploymentRolloutConfig <a name="GameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_game_server_config: str,
  deployment_id: str,
  game_server_config_overrides: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]] = None,
  id: str = None,
  project: str = None,
  timeouts: GameServicesGameServerDeploymentRolloutTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```python
default_game_server_config: str
```

- *Type:* str

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}

---

##### `game_server_config_overrides`<sup>Optional</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```python
game_server_config_overrides: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```python
timeouts: GameServicesGameServerDeploymentRolloutTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides(
  config_version: str = None,
  realms_selector: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">config_version</a></code> | <code>str</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">realms_selector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `config_version`<sup>Optional</sup> <a name="config_version" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

Version of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#config_version GameServicesGameServerDeploymentRollout#config_version}

---

##### `realms_selector`<sup>Optional</sup> <a name="realms_selector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```python
realms_selector: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#realms_selector GameServicesGameServerDeploymentRollout#realms_selector}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector(
  realms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">realms</a></code> | <code>typing.List[str]</code> | List of realms to match against. |

---

##### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```python
realms: typing.List[str]
```

- *Type:* typing.List[str]

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#realms GameServicesGameServerDeploymentRollout#realms}

---

### GameServicesGameServerDeploymentRolloutTimeouts <a name="GameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">put_realms_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">reset_config_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">reset_realms_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_realms_selector` <a name="put_realms_selector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```python
def put_realms_selector(
  realms: typing.List[str] = None
) -> None
```

###### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.realms"></a>

- *Type:* typing.List[str]

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment_rollout#realms GameServicesGameServerDeploymentRollout#realms}

---

##### `reset_config_version` <a name="reset_config_version" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```python
def reset_config_version() -> None
```

##### `reset_realms_selector` <a name="reset_realms_selector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```python
def reset_realms_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">realms_selector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">config_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">realms_selector_input</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `realms_selector`<sup>Required</sup> <a name="realms_selector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```python
realms_selector: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `config_version_input`<sup>Optional</sup> <a name="config_version_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```python
config_version_input: str
```

- *Type:* str

---

##### `realms_selector_input`<sup>Optional</sup> <a name="realms_selector_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```python
realms_selector_input: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameServicesGameServerDeploymentRolloutGameServerConfigOverrides, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>, cdktf.IResolvable]

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">reset_realms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_realms` <a name="reset_realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```python
def reset_realms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">realms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">realms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `realms_input`<sup>Optional</sup> <a name="realms_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```python
realms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `realms`<sup>Required</sup> <a name="realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```python
realms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import game_services_game_server_deployment_rollout

gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameServicesGameServerDeploymentRolloutTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]

---



