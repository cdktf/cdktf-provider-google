# `apigeeSecurityAction` Submodule <a name="`apigeeSecurityAction` Submodule" id="@cdktf/provider-google.apigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityAction <a name="ApigeeSecurityAction" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityAction;

ApigeeSecurityAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .conditionConfig(ApigeeSecurityActionConditionConfig)
    .envId(java.lang.String)
    .orgId(java.lang.String)
    .securityActionId(java.lang.String)
    .state(java.lang.String)
//  .allow(ApigeeSecurityActionAllow)
//  .apiProxies(java.util.List<java.lang.String>)
//  .deny(ApigeeSecurityActionDeny)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .flag(ApigeeSecurityActionFlag)
//  .id(java.lang.String)
//  .timeouts(ApigeeSecurityActionTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.conditionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.securityActionId"></a>

- *Type:* java.lang.String

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.apiProxies"></a>

- *Type:* java.util.List<java.lang.String>

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.flag"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig">putConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag">putFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies">resetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag">resetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow"></a>

```java
public void putAllow(ApigeeSecurityActionAllow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `putConditionConfig` <a name="putConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig"></a>

```java
public void putConditionConfig(ApigeeSecurityActionConditionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny"></a>

```java
public void putDeny(ApigeeSecurityActionDeny value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `putFlag` <a name="putFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag"></a>

```java
public void putFlag(ApigeeSecurityActionFlag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts"></a>

```java
public void putTimeouts(ApigeeSecurityActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetApiProxies` <a name="resetApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies"></a>

```java
public void resetApiProxies()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetFlag` <a name="resetFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag"></a>

```java
public void resetFlag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityAction;

ApigeeSecurityAction.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityAction;

ApigeeSecurityAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityAction;

ApigeeSecurityAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityAction;

ApigeeSecurityAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeSecurityAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput">apiProxiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput">conditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput">flagInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput">securityActionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow"></a>

```java
public ApigeeSecurityActionAllowOutputReference getAllow();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig"></a>

```java
public ApigeeSecurityActionConditionConfigOutputReference getConditionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny"></a>

```java
public ApigeeSecurityActionDenyOutputReference getDeny();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a>

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag"></a>

```java
public ApigeeSecurityActionFlagOutputReference getFlag();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts"></a>

```java
public ApigeeSecurityActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput"></a>

```java
public ApigeeSecurityActionAllow getAllowInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `apiProxiesInput`<sup>Optional</sup> <a name="apiProxiesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput"></a>

```java
public java.util.List<java.lang.String> getApiProxiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionConfigInput`<sup>Optional</sup> <a name="conditionConfigInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput"></a>

```java
public ApigeeSecurityActionConditionConfig getConditionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput"></a>

```java
public ApigeeSecurityActionDeny getDenyInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `flagInput`<sup>Optional</sup> <a name="flagInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput"></a>

```java
public ApigeeSecurityActionFlag getFlagInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `securityActionIdInput`<sup>Optional</sup> <a name="securityActionIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput"></a>

```java
public java.lang.String getSecurityActionIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `apiProxies`<sup>Required</sup> <a name="apiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies"></a>

```java
public java.util.List<java.lang.String> getApiProxies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId"></a>

```java
public java.lang.String getSecurityActionId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityActionAllow <a name="ApigeeSecurityActionAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionAllow;

ApigeeSecurityActionAllow.builder()
    .build();
```


### ApigeeSecurityActionConditionConfig <a name="ApigeeSecurityActionConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionConditionConfig;

ApigeeSecurityActionConditionConfig.builder()
//  .accessTokens(java.util.List<java.lang.String>)
//  .apiKeys(java.util.List<java.lang.String>)
//  .apiProducts(java.util.List<java.lang.String>)
//  .asns(java.util.List<java.lang.String>)
//  .botReasons(java.util.List<java.lang.String>)
//  .developerApps(java.util.List<java.lang.String>)
//  .developers(java.util.List<java.lang.String>)
//  .httpMethods(java.util.List<java.lang.String>)
//  .ipAddressRanges(java.util.List<java.lang.String>)
//  .regionCodes(java.util.List<java.lang.String>)
//  .userAgents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens">accessTokens</a></code> | <code>java.util.List<java.lang.String></code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys">apiKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons">botReasons</a></code> | <code>java.util.List<java.lang.String></code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps">developerApps</a></code> | <code>java.util.List<java.lang.String></code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers">developers</a></code> | <code>java.util.List<java.lang.String></code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods">httpMethods</a></code> | <code>java.util.List<java.lang.String></code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges">ipAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes">regionCodes</a></code> | <code>java.util.List<java.lang.String></code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents">userAgents</a></code> | <code>java.util.List<java.lang.String></code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `accessTokens`<sup>Optional</sup> <a name="accessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```java
public java.util.List<java.lang.String> getAccessTokens();
```

- *Type:* java.util.List<java.lang.String>

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

##### `apiKeys`<sup>Optional</sup> <a name="apiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```java
public java.util.List<java.lang.String> getApiKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

##### `botReasons`<sup>Optional</sup> <a name="botReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons"></a>

```java
public java.util.List<java.lang.String> getBotReasons();
```

- *Type:* java.util.List<java.lang.String>

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

##### `developerApps`<sup>Optional</sup> <a name="developerApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps"></a>

```java
public java.util.List<java.lang.String> getDeveloperApps();
```

- *Type:* java.util.List<java.lang.String>

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

##### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers"></a>

```java
public java.util.List<java.lang.String> getDevelopers();
```

- *Type:* java.util.List<java.lang.String>

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

##### `httpMethods`<sup>Optional</sup> <a name="httpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```java
public java.util.List<java.lang.String> getHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

##### `ipAddressRanges`<sup>Optional</sup> <a name="ipAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```java
public java.util.List<java.lang.String> getIpAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

##### `regionCodes`<sup>Optional</sup> <a name="regionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```java
public java.util.List<java.lang.String> getRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

##### `userAgents`<sup>Optional</sup> <a name="userAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents"></a>

```java
public java.util.List<java.lang.String> getUserAgents();
```

- *Type:* java.util.List<java.lang.String>

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

### ApigeeSecurityActionConfig <a name="ApigeeSecurityActionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionConfig;

ApigeeSecurityActionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .conditionConfig(ApigeeSecurityActionConditionConfig)
    .envId(java.lang.String)
    .orgId(java.lang.String)
    .securityActionId(java.lang.String)
    .state(java.lang.String)
//  .allow(ApigeeSecurityActionAllow)
//  .apiProxies(java.util.List<java.lang.String>)
//  .deny(ApigeeSecurityActionDeny)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .flag(ApigeeSecurityActionFlag)
//  .id(java.lang.String)
//  .timeouts(ApigeeSecurityActionTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state">state</a></code> | <code>java.lang.String</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig"></a>

```java
public ApigeeSecurityActionConditionConfig getConditionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId"></a>

```java
public java.lang.String getSecurityActionId();
```

- *Type:* java.lang.String

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow"></a>

```java
public ApigeeSecurityActionAllow getAllow();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies"></a>

```java
public java.util.List<java.lang.String> getApiProxies();
```

- *Type:* java.util.List<java.lang.String>

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny"></a>

```java
public ApigeeSecurityActionDeny getDeny();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag"></a>

```java
public ApigeeSecurityActionFlag getFlag();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts"></a>

```java
public ApigeeSecurityActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

### ApigeeSecurityActionDeny <a name="ApigeeSecurityActionDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionDeny;

ApigeeSecurityActionDeny.builder()
//  .responseCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | The HTTP response code if the Action = DENY. |

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

### ApigeeSecurityActionFlag <a name="ApigeeSecurityActionFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionFlag;

ApigeeSecurityActionFlag.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<ApigeeSecurityActionFlagHeaders>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>></code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

### ApigeeSecurityActionFlagHeaders <a name="ApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionFlagHeaders;

ApigeeSecurityActionFlagHeaders.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header value to be sent to the target. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}

---

### ApigeeSecurityActionTimeouts <a name="ApigeeSecurityActionTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionTimeouts;

ApigeeSecurityActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityActionAllowOutputReference <a name="ApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionAllowOutputReference;

new ApigeeSecurityActionAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```java
public ApigeeSecurityActionAllow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---


### ApigeeSecurityActionConditionConfigOutputReference <a name="ApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionConditionConfigOutputReference;

new ApigeeSecurityActionConditionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">resetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">resetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">resetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">resetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">resetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">resetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">resetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">resetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">resetUserAgents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokens` <a name="resetAccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```java
public void resetAccessTokens()
```

##### `resetApiKeys` <a name="resetApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```java
public void resetApiKeys()
```

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```java
public void resetApiProducts()
```

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```java
public void resetAsns()
```

##### `resetBotReasons` <a name="resetBotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```java
public void resetBotReasons()
```

##### `resetDeveloperApps` <a name="resetDeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```java
public void resetDeveloperApps()
```

##### `resetDevelopers` <a name="resetDevelopers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```java
public void resetDevelopers()
```

##### `resetHttpMethods` <a name="resetHttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```java
public void resetHttpMethods()
```

##### `resetIpAddressRanges` <a name="resetIpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```java
public void resetIpAddressRanges()
```

##### `resetRegionCodes` <a name="resetRegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```java
public void resetRegionCodes()
```

##### `resetUserAgents` <a name="resetUserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```java
public void resetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">accessTokensInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">apiKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">apiProductsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">asnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">botReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">developerAppsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput">developersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">httpMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">ipAddressRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">regionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">userAgentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">accessTokens</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">apiKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons">botReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps">developerApps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers">developers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">httpMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">ipAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">regionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents">userAgents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokensInput`<sup>Optional</sup> <a name="accessTokensInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```java
public java.util.List<java.lang.String> getAccessTokensInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeysInput`<sup>Optional</sup> <a name="apiKeysInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```java
public java.util.List<java.lang.String> getApiKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```java
public java.util.List<java.lang.String> getApiProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```java
public java.util.List<java.lang.String> getAsnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `botReasonsInput`<sup>Optional</sup> <a name="botReasonsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```java
public java.util.List<java.lang.String> getBotReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developerAppsInput`<sup>Optional</sup> <a name="developerAppsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```java
public java.util.List<java.lang.String> getDeveloperAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developersInput`<sup>Optional</sup> <a name="developersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```java
public java.util.List<java.lang.String> getDevelopersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpMethodsInput`<sup>Optional</sup> <a name="httpMethodsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```java
public java.util.List<java.lang.String> getHttpMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressRangesInput`<sup>Optional</sup> <a name="ipAddressRangesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodesInput`<sup>Optional</sup> <a name="regionCodesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```java
public java.util.List<java.lang.String> getRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAgentsInput`<sup>Optional</sup> <a name="userAgentsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```java
public java.util.List<java.lang.String> getUserAgentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokens`<sup>Required</sup> <a name="accessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```java
public java.util.List<java.lang.String> getAccessTokens();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeys`<sup>Required</sup> <a name="apiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```java
public java.util.List<java.lang.String> getApiKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `botReasons`<sup>Required</sup> <a name="botReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```java
public java.util.List<java.lang.String> getBotReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developerApps`<sup>Required</sup> <a name="developerApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```java
public java.util.List<java.lang.String> getDeveloperApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developers`<sup>Required</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```java
public java.util.List<java.lang.String> getDevelopers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpMethods`<sup>Required</sup> <a name="httpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```java
public java.util.List<java.lang.String> getHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```java
public java.util.List<java.lang.String> getIpAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodes`<sup>Required</sup> <a name="regionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```java
public java.util.List<java.lang.String> getRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAgents`<sup>Required</sup> <a name="userAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```java
public java.util.List<java.lang.String> getUserAgents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```java
public ApigeeSecurityActionConditionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---


### ApigeeSecurityActionDenyOutputReference <a name="ApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionDenyOutputReference;

new ApigeeSecurityActionDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```java
public void resetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```java
public java.lang.Number getResponseCodeInput();
```

- *Type:* java.lang.Number

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```java
public ApigeeSecurityActionDeny getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---


### ApigeeSecurityActionFlagHeadersList <a name="ApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionFlagHeadersList;

new ApigeeSecurityActionFlagHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get"></a>

```java
public ApigeeSecurityActionFlagHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>>

---


### ApigeeSecurityActionFlagHeadersOutputReference <a name="ApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionFlagHeadersOutputReference;

new ApigeeSecurityActionFlagHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>

---


### ApigeeSecurityActionFlagOutputReference <a name="ApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionFlagOutputReference;

new ApigeeSecurityActionFlagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ApigeeSecurityActionFlagHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers"></a>

```java
public ApigeeSecurityActionFlagHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```java
public ApigeeSecurityActionFlag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---


### ApigeeSecurityActionTimeoutsOutputReference <a name="ApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_action.ApigeeSecurityActionTimeoutsOutputReference;

new ApigeeSecurityActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---



