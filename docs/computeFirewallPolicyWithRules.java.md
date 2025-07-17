# `computeFirewallPolicyWithRules` Submodule <a name="`computeFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google.computeFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewallPolicyWithRules <a name="ComputeFirewallPolicyWithRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules google_compute_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRules;

ComputeFirewallPolicyWithRules.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<ComputeFirewallPolicyWithRulesRule>)
    .shortName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ComputeFirewallPolicyWithRulesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | A textual name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#parent ComputeFirewallPolicyWithRules#parent}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#rule ComputeFirewallPolicyWithRules#rule}

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

A textual name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#short_name ComputeFirewallPolicyWithRules#short_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#timeouts ComputeFirewallPolicyWithRules#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<ComputeFirewallPolicyWithRulesRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts"></a>

```java
public void putTimeouts(ComputeFirewallPolicyWithRulesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRules;

ComputeFirewallPolicyWithRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRules;

ComputeFirewallPolicyWithRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRules;

ComputeFirewallPolicyWithRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRules;

ComputeFirewallPolicyWithRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeFirewallPolicyWithRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeFirewallPolicyWithRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.predefinedRules">predefinedRules</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList">ComputeFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList">ComputeFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleTupleCount">ruleTupleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference">ComputeFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `predefinedRules`<sup>Required</sup> <a name="predefinedRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.predefinedRules"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesList getPredefinedRules();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList">ComputeFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.rule"></a>

```java
public ComputeFirewallPolicyWithRulesRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList">ComputeFirewallPolicyWithRulesRuleList</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleTupleCount"></a>

```java
public java.lang.Number getRuleTupleCount();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeouts"></a>

```java
public ComputeFirewallPolicyWithRulesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference">ComputeFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>>

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallPolicyWithRulesConfig <a name="ComputeFirewallPolicyWithRulesConfig" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesConfig;

ComputeFirewallPolicyWithRulesConfig.builder()
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
    .parent(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<ComputeFirewallPolicyWithRulesRule>)
    .shortName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ComputeFirewallPolicyWithRulesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | A textual name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#parent ComputeFirewallPolicyWithRules#parent}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#rule ComputeFirewallPolicyWithRules#rule}

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

A textual name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#short_name ComputeFirewallPolicyWithRules#short_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.timeouts"></a>

```java
public ComputeFirewallPolicyWithRulesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#timeouts ComputeFirewallPolicyWithRules#timeouts}

---

### ComputeFirewallPolicyWithRulesPredefinedRules <a name="ComputeFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRules;

ComputeFirewallPolicyWithRulesPredefinedRules.builder()
    .build();
```


### ComputeFirewallPolicyWithRulesPredefinedRulesMatch <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch;

ComputeFirewallPolicyWithRulesPredefinedRulesMatch.builder()
    .build();
```


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config;

ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.builder()
    .build();
```


### ComputeFirewallPolicyWithRulesRule <a name="ComputeFirewallPolicyWithRulesRule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRule;

ComputeFirewallPolicyWithRulesRule.builder()
    .action(java.lang.String)
    .match(ComputeFirewallPolicyWithRulesRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .direction(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .ruleName(java.lang.String)
//  .securityProfileGroup(java.lang.String)
//  .targetResources(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .tlsInspect(java.lang.Boolean)
//  .tlsInspect(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.description">description</a></code> | <code>java.lang.String</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.tlsInspect">tlsInspect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#action ComputeFirewallPolicyWithRules#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.match"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#match ComputeFirewallPolicyWithRules#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#priority ComputeFirewallPolicyWithRules#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#direction ComputeFirewallPolicyWithRules#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#disabled ComputeFirewallPolicyWithRules#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#enable_logging ComputeFirewallPolicyWithRules#enable_logging}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#rule_name ComputeFirewallPolicyWithRules#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```java
public java.lang.String getSecurityProfileGroup();
```

- *Type:* java.lang.String

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#security_profile_group ComputeFirewallPolicyWithRules#security_profile_group}

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#target_resources ComputeFirewallPolicyWithRules#target_resources}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#target_service_accounts ComputeFirewallPolicyWithRules#target_service_accounts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```java
public java.lang.Object getTlsInspect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#tls_inspect ComputeFirewallPolicyWithRules#tls_inspect}

---

### ComputeFirewallPolicyWithRulesRuleMatch <a name="ComputeFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleMatch;

ComputeFirewallPolicyWithRulesRuleMatch.builder()
    .layer4Config(IResolvable)
    .layer4Config(java.util.List<ComputeFirewallPolicyWithRulesRuleMatchLayer4Config>)
//  .destAddressGroups(java.util.List<java.lang.String>)
//  .destFqdns(java.util.List<java.lang.String>)
//  .destIpRanges(java.util.List<java.lang.String>)
//  .destRegionCodes(java.util.List<java.lang.String>)
//  .destThreatIntelligences(java.util.List<java.lang.String>)
//  .srcAddressGroups(java.util.List<java.lang.String>)
//  .srcFqdns(java.util.List<java.lang.String>)
//  .srcIpRanges(java.util.List<java.lang.String>)
//  .srcRegionCodes(java.util.List<java.lang.String>)
//  .srcThreatIntelligences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.layer4Config">layer4Config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>></code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```java
public java.lang.Object getLayer4Config();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>>

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#layer4_config ComputeFirewallPolicyWithRules#layer4_config}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#dest_address_groups ComputeFirewallPolicyWithRules#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#dest_fqdns ComputeFirewallPolicyWithRules#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#dest_ip_ranges ComputeFirewallPolicyWithRules#dest_ip_ranges}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#dest_region_codes ComputeFirewallPolicyWithRules#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#dest_threat_intelligences ComputeFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#src_address_groups ComputeFirewallPolicyWithRules#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#src_fqdns ComputeFirewallPolicyWithRules#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#src_ip_ranges ComputeFirewallPolicyWithRules#src_ip_ranges}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#src_region_codes ComputeFirewallPolicyWithRules#src_region_codes}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#src_threat_intelligences ComputeFirewallPolicyWithRules#src_threat_intelligences}

---

### ComputeFirewallPolicyWithRulesRuleMatchLayer4Config <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config;

ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.builder()
    .ipProtocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#ip_protocol ComputeFirewallPolicyWithRules#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#ports ComputeFirewallPolicyWithRules#ports}

---

### ComputeFirewallPolicyWithRulesTimeouts <a name="ComputeFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesTimeouts;

ComputeFirewallPolicyWithRulesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#create ComputeFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#delete ComputeFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#update ComputeFirewallPolicyWithRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#create ComputeFirewallPolicyWithRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#delete ComputeFirewallPolicyWithRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_firewall_policy_with_rules#update ComputeFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallPolicyWithRulesPredefinedRulesList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesList;

new ComputeFirewallPolicyWithRulesPredefinedRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList;

new ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference;

new ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList;

new ComputeFirewallPolicyWithRulesPredefinedRulesMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference;

new ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch">ComputeFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList getLayer4Config();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch">ComputeFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference;

new ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">enableLogging</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules">ComputeFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```java
public IResolvable getEnableLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRulesMatchList getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```java
public java.lang.String getSecurityProfileGroup();
```

- *Type:* java.lang.String

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```java
public IResolvable getTlsInspect();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```java
public ComputeFirewallPolicyWithRulesPredefinedRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules">ComputeFirewallPolicyWithRulesPredefinedRules</a>

---


### ComputeFirewallPolicyWithRulesRuleList <a name="ComputeFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleList;

new ComputeFirewallPolicyWithRulesRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get"></a>

```java
public ComputeFirewallPolicyWithRulesRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>>

---


### ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList;

new ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>>

---


### ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference;

new ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>

---


### ComputeFirewallPolicyWithRulesRuleMatchOutputReference <a name="ComputeFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference;

new ComputeFirewallPolicyWithRulesRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">putLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Config` <a name="putLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```java
public void putLayer4Config(IResolvable OR java.util.List<ComputeFirewallPolicyWithRulesRuleMatchLayer4Config> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>>

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```java
public void resetDestAddressGroups()
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```java
public void resetDestFqdns()
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```java
public void resetDestRegionCodes()
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```java
public void resetDestThreatIntelligences()
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```java
public void resetSrcAddressGroups()
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```java
public void resetSrcFqdns()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```java
public void resetSrcRegionCodes()
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```java
public void resetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">layer4ConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList getLayer4Config();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getDestFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4ConfigInput`<sup>Optional</sup> <a name="layer4ConfigInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```java
public java.lang.Object getLayer4ConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>>

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getSrcFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```java
public java.util.List<java.lang.String> getDestAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```java
public java.util.List<java.lang.String> getDestFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```java
public java.util.List<java.lang.String> getDestRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getDestThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```java
public java.util.List<java.lang.String> getSrcAddressGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```java
public java.util.List<java.lang.String> getSrcFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```java
public java.util.List<java.lang.String> getSrcRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```java
public java.util.List<java.lang.String> getSrcThreatIntelligences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---


### ComputeFirewallPolicyWithRulesRuleOutputReference <a name="ComputeFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesRuleOutputReference;

new ComputeFirewallPolicyWithRulesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetResources">resetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```java
public void putMatch(ComputeFirewallPolicyWithRulesRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```java
public void resetSecurityProfileGroup()
```

##### `resetTargetResources` <a name="resetTargetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetResources"></a>

```java
public void resetTargetResources()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```java
public void resetTlsInspect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference">ComputeFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResourcesInput">targetResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">tlsInspectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference">ComputeFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```java
public ComputeFirewallPolicyWithRulesRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```java
public java.lang.String getSecurityProfileGroupInput();
```

- *Type:* java.lang.String

---

##### `targetResourcesInput`<sup>Optional</sup> <a name="targetResourcesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResourcesInput"></a>

```java
public java.util.List<java.lang.String> getTargetResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```java
public java.lang.Object getTlsInspectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```java
public java.lang.String getSecurityProfileGroup();
```

- *Type:* java.lang.String

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```java
public java.lang.Object getTlsInspect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>

---


### ComputeFirewallPolicyWithRulesTimeoutsOutputReference <a name="ComputeFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall_policy_with_rules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference;

new ComputeFirewallPolicyWithRulesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---



