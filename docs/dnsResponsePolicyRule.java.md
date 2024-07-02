# `dnsResponsePolicyRule` Submodule <a name="`dnsResponsePolicyRule` Submodule" id="@cdktf/provider-google.dnsResponsePolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicyRule <a name="DnsResponsePolicyRule" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule google_dns_response_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRule;

DnsResponsePolicyRule.Builder.create(Construct scope, java.lang.String id)
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
    .dnsName(java.lang.String)
    .responsePolicy(java.lang.String)
    .ruleName(java.lang.String)
//  .id(java.lang.String)
//  .localData(DnsResponsePolicyRuleLocalData)
//  .project(java.lang.String)
//  .timeouts(DnsResponsePolicyRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.dnsName">dnsName</a></code> | <code>java.lang.String</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.responsePolicy">responsePolicy</a></code> | <code>java.lang.String</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.localData">localData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.dnsName"></a>

- *Type:* java.lang.String

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#dns_name DnsResponsePolicyRule#dns_name}

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.responsePolicy"></a>

- *Type:* java.lang.String

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#response_policy DnsResponsePolicyRule#response_policy}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#rule_name DnsResponsePolicyRule#rule_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localData`<sup>Optional</sup> <a name="localData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.localData"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#local_data DnsResponsePolicyRule#local_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#timeouts DnsResponsePolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData">putLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData">resetLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalData` <a name="putLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData"></a>

```java
public void putLocalData(DnsResponsePolicyRuleLocalData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts"></a>

```java
public void putTimeouts(DnsResponsePolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetLocalData` <a name="resetLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData"></a>

```java
public void resetLocalData()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRule;

DnsResponsePolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRule;

DnsResponsePolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRule;

DnsResponsePolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRule;

DnsResponsePolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsResponsePolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsResponsePolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsResponsePolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData">localData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput">localDataInput</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput">responsePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy">responsePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localData`<sup>Required</sup> <a name="localData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData"></a>

```java
public DnsResponsePolicyRuleLocalDataOutputReference getLocalData();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts"></a>

```java
public DnsResponsePolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localDataInput`<sup>Optional</sup> <a name="localDataInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput"></a>

```java
public DnsResponsePolicyRuleLocalData getLocalDataInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `responsePolicyInput`<sup>Optional</sup> <a name="responsePolicyInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput"></a>

```java
public java.lang.String getResponsePolicyInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy"></a>

```java
public java.lang.String getResponsePolicy();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyRuleConfig <a name="DnsResponsePolicyRuleConfig" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleConfig;

DnsResponsePolicyRuleConfig.builder()
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
    .dnsName(java.lang.String)
    .responsePolicy(java.lang.String)
    .ruleName(java.lang.String)
//  .id(java.lang.String)
//  .localData(DnsResponsePolicyRuleLocalData)
//  .project(java.lang.String)
//  .timeouts(DnsResponsePolicyRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy">responsePolicy</a></code> | <code>java.lang.String</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData">localData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#dns_name DnsResponsePolicyRule#dns_name}

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy"></a>

```java
public java.lang.String getResponsePolicy();
```

- *Type:* java.lang.String

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#response_policy DnsResponsePolicyRule#response_policy}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#rule_name DnsResponsePolicyRule#rule_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localData`<sup>Optional</sup> <a name="localData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData"></a>

```java
public DnsResponsePolicyRuleLocalData getLocalData();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#local_data DnsResponsePolicyRule#local_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts"></a>

```java
public DnsResponsePolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#timeouts DnsResponsePolicyRule#timeouts}

---

### DnsResponsePolicyRuleLocalData <a name="DnsResponsePolicyRuleLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleLocalData;

DnsResponsePolicyRuleLocalData.builder()
    .localDatas(IResolvable)
    .localDatas(java.util.List<DnsResponsePolicyRuleLocalDataLocalDatas>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas">localDatas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>></code> | local_datas block. |

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas"></a>

```java
public java.lang.Object getLocalDatas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>>

local_datas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#local_datas DnsResponsePolicyRule#local_datas}

---

### DnsResponsePolicyRuleLocalDataLocalDatas <a name="DnsResponsePolicyRuleLocalDataLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleLocalDataLocalDatas;

DnsResponsePolicyRuleLocalDataLocalDatas.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .rrdatas(java.util.List<java.lang.String>)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name">name</a></code> | <code>java.lang.String</code> | For example, www.example.com. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type">type</a></code> | <code>java.lang.String</code> | One of valid DNS resource types. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas">rrdatas</a></code> | <code>java.util.List<java.lang.String></code> | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Number of seconds that this ResourceRecordSet can be cached by resolvers. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

For example, www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#name DnsResponsePolicyRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

One of valid DNS resource types.

Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#type DnsResponsePolicyRule#type}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas"></a>

```java
public java.util.List<java.lang.String> getRrdatas();
```

- *Type:* java.util.List<java.lang.String>

As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#rrdatas DnsResponsePolicyRule#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Number of seconds that this ResourceRecordSet can be cached by resolvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#ttl DnsResponsePolicyRule#ttl}

---

### DnsResponsePolicyRuleTimeouts <a name="DnsResponsePolicyRuleTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleTimeouts;

DnsResponsePolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyRuleLocalDataLocalDatasList <a name="DnsResponsePolicyRuleLocalDataLocalDatasList" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleLocalDataLocalDatasList;

new DnsResponsePolicyRuleLocalDataLocalDatasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get"></a>

```java
public DnsResponsePolicyRuleLocalDataLocalDatasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>>

---


### DnsResponsePolicyRuleLocalDataLocalDatasOutputReference <a name="DnsResponsePolicyRuleLocalDataLocalDatasOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference;

new DnsResponsePolicyRuleLocalDataLocalDatasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas"></a>

```java
public void resetRrdatas()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas">rrdatas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput"></a>

```java
public java.util.List<java.lang.String> getRrdatasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas"></a>

```java
public java.util.List<java.lang.String> getRrdatas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>

---


### DnsResponsePolicyRuleLocalDataOutputReference <a name="DnsResponsePolicyRuleLocalDataOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleLocalDataOutputReference;

new DnsResponsePolicyRuleLocalDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas">putLocalDatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalDatas` <a name="putLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas"></a>

```java
public void putLocalDatas(IResolvable OR java.util.List<DnsResponsePolicyRuleLocalDataLocalDatas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas">localDatas</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput">localDatasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas"></a>

```java
public DnsResponsePolicyRuleLocalDataLocalDatasList getLocalDatas();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a>

---

##### `localDatasInput`<sup>Optional</sup> <a name="localDatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput"></a>

```java
public java.lang.Object getLocalDatasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue"></a>

```java
public DnsResponsePolicyRuleLocalData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---


### DnsResponsePolicyRuleTimeoutsOutputReference <a name="DnsResponsePolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_response_policy_rule.DnsResponsePolicyRuleTimeoutsOutputReference;

new DnsResponsePolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---



