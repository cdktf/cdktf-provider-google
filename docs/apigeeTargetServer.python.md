# `apigeeTargetServer` Submodule <a name="`apigeeTargetServer` Submodule" id="@cdktf/provider-google.apigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeTargetServer <a name="ApigeeTargetServer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  description: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  s_sl_info: ApigeeTargetServerSSlInfo = None,
  timeouts: ApigeeTargetServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.host">host</a></code> | <code>str</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.envId"></a>

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.host"></a>

- *Type:* str

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.name"></a>

- *Type:* str

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.protocol"></a>

- *Type:* str

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `s_sl_info`<sup>Optional</sup> <a name="s_sl_info" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.sSlInfo"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo">put_s_sl_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo">reset_s_sl_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_s_sl_info` <a name="put_s_sl_info" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo"></a>

```python
def put_s_sl_info(
  enabled: typing.Union[bool, IResolvable],
  ciphers: typing.List[str] = None,
  client_auth_enabled: typing.Union[bool, IResolvable] = None,
  common_name: ApigeeTargetServerSSlInfoCommonName = None,
  ignore_validation_errors: typing.Union[bool, IResolvable] = None,
  key_alias: str = None,
  key_store: str = None,
  protocols: typing.List[str] = None,
  trust_store: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}

---

###### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.ciphers"></a>

- *Type:* typing.List[str]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}

---

###### `client_auth_enabled`<sup>Optional</sup> <a name="client_auth_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.clientAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}

---

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.commonName"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}

---

###### `ignore_validation_errors`<sup>Optional</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.ignoreValidationErrors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}

---

###### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.keyAlias"></a>

- *Type:* str

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}

---

###### `key_store`<sup>Optional</sup> <a name="key_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.keyStore"></a>

- *Type:* str

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}

---

###### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.protocols"></a>

- *Type:* typing.List[str]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}

---

###### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.trustStore"></a>

- *Type:* str

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_s_sl_info` <a name="reset_s_sl_info" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo"></a>

```python
def reset_s_sl_info() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeTargetServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput">s_sl_info_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s_sl_info`<sup>Required</sup> <a name="s_sl_info" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo"></a>

```python
s_sl_info: ApigeeTargetServerSSlInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts"></a>

```python
timeouts: ApigeeTargetServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `s_sl_info_input`<sup>Optional</sup> <a name="s_sl_info_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput"></a>

```python
s_sl_info_input: ApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeTargetServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeTargetServerConfig <a name="ApigeeTargetServerConfig" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  description: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  s_sl_info: ApigeeTargetServerSSlInfo = None,
  timeouts: ApigeeTargetServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host">host</a></code> | <code>str</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name">name</a></code> | <code>str</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol">protocol</a></code> | <code>str</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `s_sl_info`<sup>Optional</sup> <a name="s_sl_info" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo"></a>

```python
s_sl_info: ApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts"></a>

```python
timeouts: ApigeeTargetServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

### ApigeeTargetServerSSlInfo <a name="ApigeeTargetServerSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerSSlInfo(
  enabled: typing.Union[bool, IResolvable],
  ciphers: typing.List[str] = None,
  client_auth_enabled: typing.Union[bool, IResolvable] = None,
  common_name: ApigeeTargetServerSSlInfoCommonName = None,
  ignore_validation_errors: typing.Union[bool, IResolvable] = None,
  key_alias: str = None,
  key_store: str = None,
  protocols: typing.List[str] = None,
  trust_store: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled">client_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName">common_name</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors">ignore_validation_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias">key_alias</a></code> | <code>str</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore">key_store</a></code> | <code>str</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore">trust_store</a></code> | <code>str</code> | The resource ID of the truststore. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}

---

##### `client_auth_enabled`<sup>Optional</sup> <a name="client_auth_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```python
client_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName"></a>

```python
common_name: ApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}

---

##### `ignore_validation_errors`<sup>Optional</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```python
ignore_validation_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}

---

##### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}

---

##### `key_store`<sup>Optional</sup> <a name="key_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}

---

### ApigeeTargetServerSSlInfoCommonName <a name="ApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName(
  value: str = None,
  wildcard_match: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value">value</a></code> | <code>str</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">wildcard_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value"></a>

```python
value: str
```

- *Type:* str

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}

---

##### `wildcard_match`<sup>Optional</sup> <a name="wildcard_match" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```python
wildcard_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}

---

### ApigeeTargetServerTimeouts <a name="ApigeeTargetServerTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeTargetServerSSlInfoCommonNameOutputReference <a name="ApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">reset_wildcard_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_wildcard_match` <a name="reset_wildcard_match" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```python
def reset_wildcard_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">wildcard_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">wildcard_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `wildcard_match_input`<sup>Optional</sup> <a name="wildcard_match_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```python
wildcard_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `wildcard_match`<sup>Required</sup> <a name="wildcard_match" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```python
wildcard_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---


### ApigeeTargetServerSSlInfoOutputReference <a name="ApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName">put_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers">reset_ciphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">reset_client_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">reset_ignore_validation_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">reset_key_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore">reset_key_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore">reset_trust_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_common_name` <a name="put_common_name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```python
def put_common_name(
  value: str = None,
  wildcard_match: typing.Union[bool, IResolvable] = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* str

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}

---

###### `wildcard_match`<sup>Optional</sup> <a name="wildcard_match" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.wildcardMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}

---

##### `reset_ciphers` <a name="reset_ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```python
def reset_ciphers() -> None
```

##### `reset_client_auth_enabled` <a name="reset_client_auth_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```python
def reset_client_auth_enabled() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_ignore_validation_errors` <a name="reset_ignore_validation_errors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```python
def reset_ignore_validation_errors() -> None
```

##### `reset_key_alias` <a name="reset_key_alias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```python
def reset_key_alias() -> None
```

##### `reset_key_store` <a name="reset_key_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```python
def reset_key_store() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_trust_store` <a name="reset_trust_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```python
def reset_trust_store() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName">common_name</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">ciphers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">client_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">common_name_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">ignore_validation_errors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">key_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">key_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">trust_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">client_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">ignore_validation_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias">key_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore">key_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore">trust_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```python
common_name: ApigeeTargetServerSSlInfoCommonNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `ciphers_input`<sup>Optional</sup> <a name="ciphers_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```python
ciphers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_auth_enabled_input`<sup>Optional</sup> <a name="client_auth_enabled_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```python
client_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```python
common_name_input: ApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_validation_errors_input`<sup>Optional</sup> <a name="ignore_validation_errors_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```python
ignore_validation_errors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias_input`<sup>Optional</sup> <a name="key_alias_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```python
key_alias_input: str
```

- *Type:* str

---

##### `key_store_input`<sup>Optional</sup> <a name="key_store_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```python
key_store_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```python
trust_store_input: str
```

- *Type:* str

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_auth_enabled`<sup>Required</sup> <a name="client_auth_enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```python
client_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_validation_errors`<sup>Required</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```python
ignore_validation_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

---

##### `key_store`<sup>Required</sup> <a name="key_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---


### ApigeeTargetServerTimeoutsOutputReference <a name="ApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_target_server

apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeTargetServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>]

---



