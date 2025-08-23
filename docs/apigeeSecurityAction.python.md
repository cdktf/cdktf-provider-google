# `apigeeSecurityAction` Submodule <a name="`apigeeSecurityAction` Submodule" id="@cdktf/provider-google.apigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityAction <a name="ApigeeSecurityAction" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_config: ApigeeSecurityActionConditionConfig,
  env_id: str,
  org_id: str,
  security_action_id: str,
  state: str,
  allow: ApigeeSecurityActionAllow = None,
  api_proxies: typing.List[str] = None,
  deny: ApigeeSecurityActionDeny = None,
  description: str = None,
  expire_time: str = None,
  flag: ApigeeSecurityActionFlag = None,
  id: str = None,
  timeouts: ApigeeSecurityActionTimeouts = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.conditionConfig">condition_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.securityActionId">security_action_id</a></code> | <code>str</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.state">state</a></code> | <code>str</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.apiProxies">api_proxies</a></code> | <code>typing.List[str]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_config`<sup>Required</sup> <a name="condition_config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.conditionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.envId"></a>

- *Type:* str

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.orgId"></a>

- *Type:* str

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `security_action_id`<sup>Required</sup> <a name="security_action_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.securityActionId"></a>

- *Type:* str

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.state"></a>

- *Type:* str

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `api_proxies`<sup>Optional</sup> <a name="api_proxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.apiProxies"></a>

- *Type:* typing.List[str]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.description"></a>

- *Type:* str

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.expireTime"></a>

- *Type:* str

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.flag"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig">put_condition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag">put_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies">reset_api_proxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag">reset_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow"></a>

```python
def put_allow() -> None
```

##### `put_condition_config` <a name="put_condition_config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig"></a>

```python
def put_condition_config(
  access_tokens: typing.List[str] = None,
  api_keys: typing.List[str] = None,
  api_products: typing.List[str] = None,
  asns: typing.List[str] = None,
  bot_reasons: typing.List[str] = None,
  developer_apps: typing.List[str] = None,
  developers: typing.List[str] = None,
  http_methods: typing.List[str] = None,
  ip_address_ranges: typing.List[str] = None,
  region_codes: typing.List[str] = None,
  user_agents: typing.List[str] = None
) -> None
```

###### `access_tokens`<sup>Optional</sup> <a name="access_tokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.accessTokens"></a>

- *Type:* typing.List[str]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

###### `api_keys`<sup>Optional</sup> <a name="api_keys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.apiKeys"></a>

- *Type:* typing.List[str]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

###### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.apiProducts"></a>

- *Type:* typing.List[str]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

###### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.asns"></a>

- *Type:* typing.List[str]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

###### `bot_reasons`<sup>Optional</sup> <a name="bot_reasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.botReasons"></a>

- *Type:* typing.List[str]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

###### `developer_apps`<sup>Optional</sup> <a name="developer_apps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.developerApps"></a>

- *Type:* typing.List[str]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

###### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.developers"></a>

- *Type:* typing.List[str]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

###### `http_methods`<sup>Optional</sup> <a name="http_methods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.httpMethods"></a>

- *Type:* typing.List[str]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

###### `ip_address_ranges`<sup>Optional</sup> <a name="ip_address_ranges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.ipAddressRanges"></a>

- *Type:* typing.List[str]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

###### `region_codes`<sup>Optional</sup> <a name="region_codes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.regionCodes"></a>

- *Type:* typing.List[str]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

###### `user_agents`<sup>Optional</sup> <a name="user_agents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.userAgents"></a>

- *Type:* typing.List[str]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny"></a>

```python
def put_deny(
  response_code: typing.Union[int, float] = None
) -> None
```

###### `response_code`<sup>Optional</sup> <a name="response_code" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny.parameter.responseCode"></a>

- *Type:* typing.Union[int, float]

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

##### `put_flag` <a name="put_flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag"></a>

```python
def put_flag(
  headers: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_api_proxies` <a name="reset_api_proxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies"></a>

```python
def reset_api_proxies() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_flag` <a name="reset_flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag"></a>

```python
def reset_flag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeSecurityAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig">condition_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput">api_proxies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput">condition_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput">flag_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput">security_action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies">api_proxies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId">security_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow"></a>

```python
allow: ApigeeSecurityActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a>

---

##### `condition_config`<sup>Required</sup> <a name="condition_config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig"></a>

```python
condition_config: ApigeeSecurityActionConditionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny"></a>

```python
deny: ApigeeSecurityActionDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a>

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag"></a>

```python
flag: ApigeeSecurityActionFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts"></a>

```python
timeouts: ApigeeSecurityActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput"></a>

```python
allow_input: ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `api_proxies_input`<sup>Optional</sup> <a name="api_proxies_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput"></a>

```python
api_proxies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_config_input`<sup>Optional</sup> <a name="condition_config_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput"></a>

```python
condition_config_input: ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput"></a>

```python
deny_input: ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `flag_input`<sup>Optional</sup> <a name="flag_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput"></a>

```python
flag_input: ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `security_action_id_input`<sup>Optional</sup> <a name="security_action_id_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput"></a>

```python
security_action_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeSecurityActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `api_proxies`<sup>Required</sup> <a name="api_proxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies"></a>

```python
api_proxies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `security_action_id`<sup>Required</sup> <a name="security_action_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId"></a>

```python
security_action_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityActionAllow <a name="ApigeeSecurityActionAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionAllow()
```


### ApigeeSecurityActionConditionConfig <a name="ApigeeSecurityActionConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionConditionConfig(
  access_tokens: typing.List[str] = None,
  api_keys: typing.List[str] = None,
  api_products: typing.List[str] = None,
  asns: typing.List[str] = None,
  bot_reasons: typing.List[str] = None,
  developer_apps: typing.List[str] = None,
  developers: typing.List[str] = None,
  http_methods: typing.List[str] = None,
  ip_address_ranges: typing.List[str] = None,
  region_codes: typing.List[str] = None,
  user_agents: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens">access_tokens</a></code> | <code>typing.List[str]</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys">api_keys</a></code> | <code>typing.List[str]</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns">asns</a></code> | <code>typing.List[str]</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons">bot_reasons</a></code> | <code>typing.List[str]</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps">developer_apps</a></code> | <code>typing.List[str]</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers">developers</a></code> | <code>typing.List[str]</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods">http_methods</a></code> | <code>typing.List[str]</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges">ip_address_ranges</a></code> | <code>typing.List[str]</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes">region_codes</a></code> | <code>typing.List[str]</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents">user_agents</a></code> | <code>typing.List[str]</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `access_tokens`<sup>Optional</sup> <a name="access_tokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```python
access_tokens: typing.List[str]
```

- *Type:* typing.List[str]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

##### `api_keys`<sup>Optional</sup> <a name="api_keys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```python
api_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

##### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns"></a>

```python
asns: typing.List[str]
```

- *Type:* typing.List[str]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

##### `bot_reasons`<sup>Optional</sup> <a name="bot_reasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons"></a>

```python
bot_reasons: typing.List[str]
```

- *Type:* typing.List[str]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

##### `developer_apps`<sup>Optional</sup> <a name="developer_apps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps"></a>

```python
developer_apps: typing.List[str]
```

- *Type:* typing.List[str]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

##### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers"></a>

```python
developers: typing.List[str]
```

- *Type:* typing.List[str]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

##### `http_methods`<sup>Optional</sup> <a name="http_methods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```python
http_methods: typing.List[str]
```

- *Type:* typing.List[str]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

##### `ip_address_ranges`<sup>Optional</sup> <a name="ip_address_ranges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```python
ip_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

##### `region_codes`<sup>Optional</sup> <a name="region_codes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```python
region_codes: typing.List[str]
```

- *Type:* typing.List[str]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

##### `user_agents`<sup>Optional</sup> <a name="user_agents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents"></a>

```python
user_agents: typing.List[str]
```

- *Type:* typing.List[str]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

### ApigeeSecurityActionConfig <a name="ApigeeSecurityActionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_config: ApigeeSecurityActionConditionConfig,
  env_id: str,
  org_id: str,
  security_action_id: str,
  state: str,
  allow: ApigeeSecurityActionAllow = None,
  api_proxies: typing.List[str] = None,
  deny: ApigeeSecurityActionDeny = None,
  description: str = None,
  expire_time: str = None,
  flag: ApigeeSecurityActionFlag = None,
  id: str = None,
  timeouts: ApigeeSecurityActionTimeouts = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig">condition_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId">env_id</a></code> | <code>str</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId">org_id</a></code> | <code>str</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId">security_action_id</a></code> | <code>str</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state">state</a></code> | <code>str</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies">api_proxies</a></code> | <code>typing.List[str]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description">description</a></code> | <code>str</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime">expire_time</a></code> | <code>str</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_config`<sup>Required</sup> <a name="condition_config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig"></a>

```python
condition_config: ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `security_action_id`<sup>Required</sup> <a name="security_action_id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId"></a>

```python
security_action_id: str
```

- *Type:* str

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow"></a>

```python
allow: ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `api_proxies`<sup>Optional</sup> <a name="api_proxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies"></a>

```python
api_proxies: typing.List[str]
```

- *Type:* typing.List[str]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny"></a>

```python
deny: ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag"></a>

```python
flag: ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts"></a>

```python
timeouts: ApigeeSecurityActionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

### ApigeeSecurityActionDeny <a name="ApigeeSecurityActionDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionDeny(
  response_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | The HTTP response code if the Action = DENY. |

---

##### `response_code`<sup>Optional</sup> <a name="response_code" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

### ApigeeSecurityActionFlag <a name="ApigeeSecurityActionFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionFlag(
  headers: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]</code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

### ApigeeSecurityActionFlagHeaders <a name="ApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionFlagHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name">name</a></code> | <code>str</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value">value</a></code> | <code>str</code> | The header value to be sent to the target. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}

---

### ApigeeSecurityActionTimeouts <a name="ApigeeSecurityActionTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityActionAllowOutputReference <a name="ApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---


### ApigeeSecurityActionConditionConfigOutputReference <a name="ApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">reset_access_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">reset_api_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">reset_api_products</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns">reset_asns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">reset_bot_reasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">reset_developer_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">reset_developers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">reset_http_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">reset_ip_address_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">reset_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">reset_user_agents</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_tokens` <a name="reset_access_tokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```python
def reset_access_tokens() -> None
```

##### `reset_api_keys` <a name="reset_api_keys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```python
def reset_api_keys() -> None
```

##### `reset_api_products` <a name="reset_api_products" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```python
def reset_api_products() -> None
```

##### `reset_asns` <a name="reset_asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```python
def reset_asns() -> None
```

##### `reset_bot_reasons` <a name="reset_bot_reasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```python
def reset_bot_reasons() -> None
```

##### `reset_developer_apps` <a name="reset_developer_apps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```python
def reset_developer_apps() -> None
```

##### `reset_developers` <a name="reset_developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```python
def reset_developers() -> None
```

##### `reset_http_methods` <a name="reset_http_methods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```python
def reset_http_methods() -> None
```

##### `reset_ip_address_ranges` <a name="reset_ip_address_ranges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```python
def reset_ip_address_ranges() -> None
```

##### `reset_region_codes` <a name="reset_region_codes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```python
def reset_region_codes() -> None
```

##### `reset_user_agents` <a name="reset_user_agents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```python
def reset_user_agents() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">access_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">api_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">api_products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">asns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">bot_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">developer_apps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput">developers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">http_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">ip_address_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">user_agents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">access_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">api_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns">asns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons">bot_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps">developer_apps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers">developers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">ip_address_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents">user_agents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_tokens_input`<sup>Optional</sup> <a name="access_tokens_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```python
access_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_keys_input`<sup>Optional</sup> <a name="api_keys_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```python
api_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_products_input`<sup>Optional</sup> <a name="api_products_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```python
api_products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asns_input`<sup>Optional</sup> <a name="asns_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```python
asns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bot_reasons_input`<sup>Optional</sup> <a name="bot_reasons_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```python
bot_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `developer_apps_input`<sup>Optional</sup> <a name="developer_apps_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```python
developer_apps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `developers_input`<sup>Optional</sup> <a name="developers_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```python
developers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_methods_input`<sup>Optional</sup> <a name="http_methods_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```python
http_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address_ranges_input`<sup>Optional</sup> <a name="ip_address_ranges_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```python
ip_address_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_codes_input`<sup>Optional</sup> <a name="region_codes_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```python
region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_agents_input`<sup>Optional</sup> <a name="user_agents_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```python
user_agents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_tokens`<sup>Required</sup> <a name="access_tokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```python
access_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_keys`<sup>Required</sup> <a name="api_keys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```python
api_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_products`<sup>Required</sup> <a name="api_products" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```python
asns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bot_reasons`<sup>Required</sup> <a name="bot_reasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```python
bot_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `developer_apps`<sup>Required</sup> <a name="developer_apps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```python
developer_apps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `developers`<sup>Required</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```python
developers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_methods`<sup>Required</sup> <a name="http_methods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```python
http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address_ranges`<sup>Required</sup> <a name="ip_address_ranges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```python
ip_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_codes`<sup>Required</sup> <a name="region_codes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```python
region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_agents`<sup>Required</sup> <a name="user_agents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```python
user_agents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---


### ApigeeSecurityActionDenyOutputReference <a name="ApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode">reset_response_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_response_code` <a name="reset_response_code" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```python
def reset_response_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---


### ApigeeSecurityActionFlagHeadersList <a name="ApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeSecurityActionFlagHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]

---


### ApigeeSecurityActionFlagHeadersOutputReference <a name="ApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeSecurityActionFlagHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]

---


### ApigeeSecurityActionFlagOutputReference <a name="ApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers"></a>

```python
headers: ApigeeSecurityActionFlagHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ApigeeSecurityActionFlagHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---


### ApigeeSecurityActionTimeoutsOutputReference <a name="ApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_security_action

apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeSecurityActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>]

---



