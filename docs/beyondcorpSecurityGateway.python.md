# `beyondcorpSecurityGateway` Submodule <a name="`beyondcorpSecurityGateway` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGateway <a name="BeyondcorpSecurityGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_gateway_id: str,
  display_name: str = None,
  hubs: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]] = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: BeyondcorpSecurityGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.hubs">hubs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]</code> | hubs block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.hubs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs">put_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs">reset_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hubs` <a name="put_hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs"></a>

```python
def put_hubs(
  value: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_hubs` <a name="reset_hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs"></a>

```python
def reset_hubs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BeyondcorpSecurityGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount">delegating_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput">hubs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delegating_service_account`<sup>Required</sup> <a name="delegating_service_account" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```python
delegating_service_account: str
```

- *Type:* str

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs"></a>

```python
hubs: BeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts"></a>

```python
timeouts: BeyondcorpSecurityGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hubs_input`<sup>Optional</sup> <a name="hubs_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput"></a>

```python
hubs_input: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BeyondcorpSecurityGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayConfig <a name="BeyondcorpSecurityGatewayConfig" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_gateway_id: str,
  display_name: str = None,
  hubs: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]] = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: BeyondcorpSecurityGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs">hubs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]</code> | hubs block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs"></a>

```python
hubs: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```python
timeouts: BeyondcorpSecurityGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

### BeyondcorpSecurityGatewayHubs <a name="BeyondcorpSecurityGatewayHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs(
  region: str,
  internet_gateway: BeyondcorpSecurityGatewayHubsInternetGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}.

---

##### `internet_gateway`<sup>Optional</sup> <a name="internet_gateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```python
internet_gateway: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}

---

### BeyondcorpSecurityGatewayHubsInternetGateway <a name="BeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway()
```


### BeyondcorpSecurityGatewayTimeouts <a name="BeyondcorpSecurityGatewayTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assigned_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_ips`<sup>Required</sup> <a name="assigned_ips" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```python
assigned_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### BeyondcorpSecurityGatewayHubsList <a name="BeyondcorpSecurityGatewayHubsList" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]]

---


### BeyondcorpSecurityGatewayHubsOutputReference <a name="BeyondcorpSecurityGatewayHubsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">put_internet_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">reset_internet_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internet_gateway` <a name="put_internet_gateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```python
def put_internet_gateway() -> None
```

##### `reset_internet_gateway` <a name="reset_internet_gateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```python
def reset_internet_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">internet_gateway_input</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway`<sup>Required</sup> <a name="internet_gateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```python
internet_gateway: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `internet_gateway_input`<sup>Optional</sup> <a name="internet_gateway_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```python
internet_gateway_input: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpSecurityGatewayHubs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

---


### BeyondcorpSecurityGatewayTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpSecurityGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>]

---



