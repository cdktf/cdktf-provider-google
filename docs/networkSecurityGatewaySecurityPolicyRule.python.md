# `networkSecurityGatewaySecurityPolicyRule` Submodule <a name="`networkSecurityGatewaySecurityPolicyRule` Submodule" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGatewaySecurityPolicyRule <a name="NetworkSecurityGatewaySecurityPolicyRule" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  basic_profile: str,
  enabled: typing.Union[bool, IResolvable],
  gateway_security_policy: str,
  location: str,
  name: str,
  priority: typing.Union[int, float],
  session_matcher: str,
  application_matcher: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: NetworkSecurityGatewaySecurityPolicyRuleTimeouts = None,
  tls_inspection_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.basicProfile">basic_profile</a></code> | <code>str</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is enforced. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the gateway security policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.sessionMatcher">session_matcher</a></code> | <code>str</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.applicationMatcher">application_matcher</a></code> | <code>str</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.tlsInspectionEnabled">tls_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic_profile`<sup>Required</sup> <a name="basic_profile" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.basicProfile"></a>

- *Type:* str

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#basic_profile NetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#enabled NetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.gatewaySecurityPolicy"></a>

- *Type:* str

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#gateway_security_policy NetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.location"></a>

- *Type:* str

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#location NetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#name NetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#priority NetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `session_matcher`<sup>Required</sup> <a name="session_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.sessionMatcher"></a>

- *Type:* str

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#session_matcher NetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `application_matcher`<sup>Optional</sup> <a name="application_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.applicationMatcher"></a>

- *Type:* str

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#application_matcher NetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#description NetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#timeouts NetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `tls_inspection_enabled`<sup>Optional</sup> <a name="tls_inspection_enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.tlsInspectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#tls_inspection_enabled NetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher">reset_application_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled">reset_tls_inspection_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}.

---

##### `reset_application_matcher` <a name="reset_application_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher"></a>

```python
def reset_application_matcher() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_inspection_enabled` <a name="reset_tls_inspection_enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled"></a>

```python
def reset_tls_inspection_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityGatewaySecurityPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityGatewaySecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityGatewaySecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput">application_matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput">basic_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput">gateway_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput">session_matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput">tls_inspection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher">application_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfile">basic_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher">session_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled">tls_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeouts"></a>

```python
timeouts: NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_matcher_input`<sup>Optional</sup> <a name="application_matcher_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput"></a>

```python
application_matcher_input: str
```

- *Type:* str

---

##### `basic_profile_input`<sup>Optional</sup> <a name="basic_profile_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput"></a>

```python
basic_profile_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_security_policy_input`<sup>Optional</sup> <a name="gateway_security_policy_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput"></a>

```python
gateway_security_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `session_matcher_input`<sup>Optional</sup> <a name="session_matcher_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput"></a>

```python
session_matcher_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityGatewaySecurityPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>]

---

##### `tls_inspection_enabled_input`<sup>Optional</sup> <a name="tls_inspection_enabled_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput"></a>

```python
tls_inspection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_matcher`<sup>Required</sup> <a name="application_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher"></a>

```python
application_matcher: str
```

- *Type:* str

---

##### `basic_profile`<sup>Required</sup> <a name="basic_profile" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.basicProfile"></a>

```python
basic_profile: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `session_matcher`<sup>Required</sup> <a name="session_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher"></a>

```python
session_matcher: str
```

- *Type:* str

---

##### `tls_inspection_enabled`<sup>Required</sup> <a name="tls_inspection_enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled"></a>

```python
tls_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGatewaySecurityPolicyRuleConfig <a name="NetworkSecurityGatewaySecurityPolicyRuleConfig" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  basic_profile: str,
  enabled: typing.Union[bool, IResolvable],
  gateway_security_policy: str,
  location: str,
  name: str,
  priority: typing.Union[int, float],
  session_matcher: str,
  application_matcher: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: NetworkSecurityGatewaySecurityPolicyRuleTimeouts = None,
  tls_inspection_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile">basic_profile</a></code> | <code>str</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is enforced. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.location">location</a></code> | <code>str</code> | The location of the gateway security policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher">session_matcher</a></code> | <code>str</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher">application_matcher</a></code> | <code>str</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled">tls_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic_profile`<sup>Required</sup> <a name="basic_profile" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile"></a>

```python
basic_profile: str
```

- *Type:* str

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#basic_profile NetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#enabled NetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#gateway_security_policy NetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#location NetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#name NetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#priority NetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `session_matcher`<sup>Required</sup> <a name="session_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher"></a>

```python
session_matcher: str
```

- *Type:* str

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#session_matcher NetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `application_matcher`<sup>Optional</sup> <a name="application_matcher" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher"></a>

```python
application_matcher: str
```

- *Type:* str

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#application_matcher NetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#description NetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityGatewaySecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#timeouts NetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `tls_inspection_enabled`<sup>Optional</sup> <a name="tls_inspection_enabled" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled"></a>

```python
tls_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#tls_inspection_enabled NetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

### NetworkSecurityGatewaySecurityPolicyRuleTimeouts <a name="NetworkSecurityGatewaySecurityPolicyRuleTimeouts" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference <a name="NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_gateway_security_policy_rule

networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityGatewaySecurityPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityGatewaySecurityPolicyRule.NetworkSecurityGatewaySecurityPolicyRuleTimeouts">NetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>]

---



