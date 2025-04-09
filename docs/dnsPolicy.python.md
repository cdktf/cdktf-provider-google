# `dnsPolicy` Submodule <a name="`dnsPolicy` Submodule" id="@cdktf/provider-google.dnsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsPolicy <a name="DnsPolicy" id="@cdktf/provider-google.dnsPolicy.DnsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy google_dns_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicy(
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
  alternative_name_server_config: DnsPolicyAlternativeNameServerConfig = None,
  description: str = None,
  enable_inbound_forwarding: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]] = None,
  project: str = None,
  timeouts: DnsPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#id DnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#project DnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.name"></a>

- *Type:* str

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#name DnsPolicy#name}

---

##### `alternative_name_server_config`<sup>Optional</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.alternativeNameServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#alternative_name_server_config DnsPolicy#alternative_name_server_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.description"></a>

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#description DnsPolicy#description}

---

##### `enable_inbound_forwarding`<sup>Optional</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.enableInboundForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#enable_inbound_forwarding DnsPolicy#enable_inbound_forwarding}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#enable_logging DnsPolicy#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#id DnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#networks DnsPolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#project DnsPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#timeouts DnsPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig">put_alternative_name_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig">reset_alternative_name_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding">reset_enable_inbound_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alternative_name_server_config` <a name="put_alternative_name_server_config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig"></a>

```python
def put_alternative_name_server_config(
  target_name_servers: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
) -> None
```

###### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig.parameter.targetNameServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#target_name_servers DnsPolicy#target_name_servers}

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#create DnsPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#delete DnsPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#update DnsPolicy#update}.

---

##### `reset_alternative_name_server_config` <a name="reset_alternative_name_server_config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig"></a>

```python
def reset_alternative_name_server_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_inbound_forwarding` <a name="reset_enable_inbound_forwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding"></a>

```python
def reset_enable_inbound_forwarding() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput">alternative_name_server_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput">enable_inbound_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alternative_name_server_config`<sup>Required</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig"></a>

```python
alternative_name_server_config: DnsPolicyAlternativeNameServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks"></a>

```python
networks: DnsPolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts"></a>

```python
timeouts: DnsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a>

---

##### `alternative_name_server_config_input`<sup>Optional</sup> <a name="alternative_name_server_config_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput"></a>

```python
alternative_name_server_config_input: DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_inbound_forwarding_input`<sup>Optional</sup> <a name="enable_inbound_forwarding_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput"></a>

```python
enable_inbound_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_inbound_forwarding`<sup>Required</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding"></a>

```python
enable_inbound_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsPolicyAlternativeNameServerConfig <a name="DnsPolicyAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyAlternativeNameServerConfig(
  target_name_servers: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers">target_name_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | target_name_servers block. |

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers"></a>

```python
target_name_servers: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#target_name_servers DnsPolicy#target_name_servers}

---

### DnsPolicyAlternativeNameServerConfigTargetNameServers <a name="DnsPolicyAlternativeNameServerConfigTargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers(
  ipv4_address: str,
  forwarding_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address to forward to. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

IPv4 address to forward to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#ipv4_address DnsPolicy#ipv4_address}

---

##### `forwarding_path`<sup>Optional</sup> <a name="forwarding_path" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#forwarding_path DnsPolicy#forwarding_path}

---

### DnsPolicyConfig <a name="DnsPolicyConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alternative_name_server_config: DnsPolicyAlternativeNameServerConfig = None,
  description: str = None,
  enable_inbound_forwarding: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]] = None,
  project: str = None,
  timeouts: DnsPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name">name</a></code> | <code>str</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#id DnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#project DnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#name DnsPolicy#name}

---

##### `alternative_name_server_config`<sup>Optional</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig"></a>

```python
alternative_name_server_config: DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#alternative_name_server_config DnsPolicy#alternative_name_server_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#description DnsPolicy#description}

---

##### `enable_inbound_forwarding`<sup>Optional</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding"></a>

```python
enable_inbound_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#enable_inbound_forwarding DnsPolicy#enable_inbound_forwarding}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#enable_logging DnsPolicy#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#id DnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#networks DnsPolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#project DnsPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts"></a>

```python
timeouts: DnsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#timeouts DnsPolicy#timeouts}

---

### DnsPolicyNetworks <a name="DnsPolicyNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyNetworks(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#network_url DnsPolicy#network_url}

---

### DnsPolicyTimeouts <a name="DnsPolicyTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#create DnsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#delete DnsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#update DnsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#create DnsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#delete DnsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/dns_policy#update DnsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsPolicyAlternativeNameServerConfigOutputReference <a name="DnsPolicyAlternativeNameServerConfigOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers">put_target_name_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_name_servers` <a name="put_target_name_servers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers"></a>

```python
def put_target_name_servers(
  value: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers">target_name_servers</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput">target_name_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers"></a>

```python
target_name_servers: DnsPolicyAlternativeNameServerConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a>

---

##### `target_name_servers_input`<sup>Optional</sup> <a name="target_name_servers_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput"></a>

```python
target_name_servers_input: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersList <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath">reset_forwarding_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarding_path` <a name="reset_forwarding_path" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```python
def reset_forwarding_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput">forwarding_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarding_path_input`<sup>Optional</sup> <a name="forwarding_path_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```python
forwarding_path_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `forwarding_path`<sup>Required</sup> <a name="forwarding_path" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsPolicyAlternativeNameServerConfigTargetNameServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>]

---


### DnsPolicyNetworksList <a name="DnsPolicyNetworksList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsPolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]]

---


### DnsPolicyNetworksOutputReference <a name="DnsPolicyNetworksOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsPolicyNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>]

---


### DnsPolicyTimeoutsOutputReference <a name="DnsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_policy

dnsPolicy.DnsPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>]

---



