# `networkSecurityGatewaySecurityPolicy` Submodule <a name="`networkSecurityGatewaySecurityPolicy` Submodule" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGatewaySecurityPolicy <a name="NetworkSecurityGatewaySecurityPolicy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy google_network_security_gateway_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy(
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
  description: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: NetworkSecurityGatewaySecurityPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$). |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#id NetworkSecurityGatewaySecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#project NetworkSecurityGatewaySecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#name NetworkSecurityGatewaySecurityPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#description NetworkSecurityGatewaySecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#id NetworkSecurityGatewaySecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#location NetworkSecurityGatewaySecurityPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#project NetworkSecurityGatewaySecurityPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#timeouts NetworkSecurityGatewaySecurityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#create NetworkSecurityGatewaySecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#delete NetworkSecurityGatewaySecurityPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#update NetworkSecurityGatewaySecurityPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityGatewaySecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityGatewaySecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityGatewaySecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.timeouts"></a>

```python
timeouts: NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityGatewaySecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGatewaySecurityPolicyConfig <a name="NetworkSecurityGatewaySecurityPolicyConfig" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: NetworkSecurityGatewaySecurityPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$). |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#id NetworkSecurityGatewaySecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#project NetworkSecurityGatewaySecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#name NetworkSecurityGatewaySecurityPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#description NetworkSecurityGatewaySecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#id NetworkSecurityGatewaySecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#location NetworkSecurityGatewaySecurityPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#project NetworkSecurityGatewaySecurityPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityGatewaySecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#timeouts NetworkSecurityGatewaySecurityPolicy#timeouts}

---

### NetworkSecurityGatewaySecurityPolicyTimeouts <a name="NetworkSecurityGatewaySecurityPolicyTimeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#create NetworkSecurityGatewaySecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#delete NetworkSecurityGatewaySecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#update NetworkSecurityGatewaySecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#create NetworkSecurityGatewaySecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#delete NetworkSecurityGatewaySecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/network_security_gateway_security_policy#update NetworkSecurityGatewaySecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference <a name="NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy

networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityGatewaySecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicy.NetworkSecurityGatewaySecurityPolicyTimeouts">NetworkSecurityGatewaySecurityPolicyTimeouts</a>]

---



