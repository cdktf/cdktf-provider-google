# `networkSecurityFirewallEndpointAssociation` Submodule <a name="`networkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpointAssociation <a name="NetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_endpoint: str,
  location: str,
  name: str,
  network: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  parent: str = None,
  timeouts: NetworkSecurityFirewallEndpointAssociationTimeouts = None,
  tls_inspection_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint">firewall_endpoint</a></code> | <code>str</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network">network</a></code> | <code>str</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy">tls_inspection_policy</a></code> | <code>str</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_endpoint`<sup>Required</sup> <a name="firewall_endpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint"></a>

- *Type:* str

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location"></a>

- *Type:* str

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name"></a>

- *Type:* str

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network"></a>

- *Type:* str

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tls_inspection_policy`<sup>Optional</sup> <a name="tls_inspection_policy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy"></a>

- *Type:* str

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">reset_tls_inspection_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}.

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_inspection_policy` <a name="reset_tls_inspection_policy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```python
def reset_tls_inspection_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityFirewallEndpointAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">firewall_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">tls_inspection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">firewall_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">tls_inspection_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```python
timeouts: NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_endpoint_input`<sup>Optional</sup> <a name="firewall_endpoint_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```python
firewall_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityFirewallEndpointAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>]

---

##### `tls_inspection_policy_input`<sup>Optional</sup> <a name="tls_inspection_policy_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```python
tls_inspection_policy_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_endpoint`<sup>Required</sup> <a name="firewall_endpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```python
firewall_endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `tls_inspection_policy`<sup>Required</sup> <a name="tls_inspection_policy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```python
tls_inspection_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointAssociationConfig <a name="NetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_endpoint: str,
  location: str,
  name: str,
  network: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  parent: str = None,
  timeouts: NetworkSecurityFirewallEndpointAssociationTimeouts = None,
  tls_inspection_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">firewall_endpoint</a></code> | <code>str</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location">location</a></code> | <code>str</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name">name</a></code> | <code>str</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network">network</a></code> | <code>str</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">tls_inspection_policy</a></code> | <code>str</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_endpoint`<sup>Required</sup> <a name="firewall_endpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```python
firewall_endpoint: str
```

- *Type:* str

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityFirewallEndpointAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tls_inspection_policy`<sup>Optional</sup> <a name="tls_inspection_policy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```python
tls_inspection_policy: str
```

- *Type:* str

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### NetworkSecurityFirewallEndpointAssociationTimeouts <a name="NetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_firewall_endpoint_association

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityFirewallEndpointAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>]

---



