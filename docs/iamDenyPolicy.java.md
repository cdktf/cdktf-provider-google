# `iamDenyPolicy` Submodule <a name="`iamDenyPolicy` Submodule" id="@cdktf/provider-google.iamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamDenyPolicy <a name="IamDenyPolicy" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicy;

IamDenyPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .parent(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<IamDenyPolicyRules>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamDenyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<IamDenyPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts"></a>

```java
public void putTimeouts(IamDenyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicy;

IamDenyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicy;

IamDenyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicy;

IamDenyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicy;

IamDenyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamDenyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamDenyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules"></a>

```java
public IamDenyPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts"></a>

```java
public IamDenyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamDenyPolicyConfig <a name="IamDenyPolicyConfig" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyConfig;

IamDenyPolicyConfig.builder()
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
    .name(java.lang.String)
    .parent(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<IamDenyPolicyRules>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamDenyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts"></a>

```java
public IamDenyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

### IamDenyPolicyRules <a name="IamDenyPolicyRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRules;

IamDenyPolicyRules.builder()
//  .denyRule(IamDenyPolicyRulesDenyRule)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule">denyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |

---

##### `denyRule`<sup>Optional</sup> <a name="denyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule"></a>

```java
public IamDenyPolicyRulesDenyRule getDenyRule();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#deny_rule IamDenyPolicy#deny_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

### IamDenyPolicyRulesDenyRule <a name="IamDenyPolicyRulesDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesDenyRule;

IamDenyPolicyRulesDenyRule.builder()
//  .denialCondition(IamDenyPolicyRulesDenyRuleDenialCondition)
//  .deniedPermissions(java.util.List<java.lang.String>)
//  .deniedPrincipals(java.util.List<java.lang.String>)
//  .exceptionPermissions(java.util.List<java.lang.String>)
//  .exceptionPrincipals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions">deniedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals">deniedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions">exceptionPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `denialCondition`<sup>Optional</sup> <a name="denialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```java
public IamDenyPolicyRulesDenyRuleDenialCondition getDenialCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#denial_condition IamDenyPolicy#denial_condition}

---

##### `deniedPermissions`<sup>Optional</sup> <a name="deniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#denied_permissions IamDenyPolicy#denied_permissions}

---

##### `deniedPrincipals`<sup>Optional</sup> <a name="deniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#denied_principals IamDenyPolicy#denied_principals}

---

##### `exceptionPermissions`<sup>Optional</sup> <a name="exceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissions();
```

- *Type:* java.util.List<java.lang.String>

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#exception_permissions IamDenyPolicy#exception_permissions}

---

##### `exceptionPrincipals`<sup>Optional</sup> <a name="exceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#exception_principals IamDenyPolicy#exception_principals}

---

### IamDenyPolicyRulesDenyRuleDenialCondition <a name="IamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesDenyRuleDenialCondition;

IamDenyPolicyRulesDenyRuleDenialCondition.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#expression IamDenyPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#location IamDenyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#title IamDenyPolicy#title}

---

### IamDenyPolicyTimeouts <a name="IamDenyPolicyTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyTimeouts;

IamDenyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="IamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference;

new IamDenyPolicyRulesDenyRuleDenialConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```java
public IamDenyPolicyRulesDenyRuleDenialCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### IamDenyPolicyRulesDenyRuleOutputReference <a name="IamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesDenyRuleOutputReference;

new IamDenyPolicyRulesDenyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">putDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">resetDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">resetDeniedPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">resetDeniedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">resetExceptionPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">resetExceptionPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenialCondition` <a name="putDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```java
public void putDenialCondition(IamDenyPolicyRulesDenyRuleDenialCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `resetDenialCondition` <a name="resetDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```java
public void resetDenialCondition()
```

##### `resetDeniedPermissions` <a name="resetDeniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```java
public void resetDeniedPermissions()
```

##### `resetDeniedPrincipals` <a name="resetDeniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```java
public void resetDeniedPrincipals()
```

##### `resetExceptionPermissions` <a name="resetExceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```java
public void resetExceptionPermissions()
```

##### `resetExceptionPrincipals` <a name="resetExceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```java
public void resetExceptionPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">denialConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">deniedPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">deniedPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">exceptionPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">exceptionPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">deniedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">deniedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">exceptionPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denialCondition`<sup>Required</sup> <a name="denialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```java
public IamDenyPolicyRulesDenyRuleDenialConditionOutputReference getDenialCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `denialConditionInput`<sup>Optional</sup> <a name="denialConditionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```java
public IamDenyPolicyRulesDenyRuleDenialCondition getDenialConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `deniedPermissionsInput`<sup>Optional</sup> <a name="deniedPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPrincipalsInput`<sup>Optional</sup> <a name="deniedPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPermissionsInput`<sup>Optional</sup> <a name="exceptionPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPrincipalsInput`<sup>Optional</sup> <a name="exceptionPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPermissions`<sup>Required</sup> <a name="deniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPrincipals`<sup>Required</sup> <a name="deniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPermissions`<sup>Required</sup> <a name="exceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPrincipals`<sup>Required</sup> <a name="exceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```java
public IamDenyPolicyRulesDenyRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---


### IamDenyPolicyRulesList <a name="IamDenyPolicyRulesList" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesList;

new IamDenyPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get"></a>

```java
public IamDenyPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>>

---


### IamDenyPolicyRulesOutputReference <a name="IamDenyPolicyRulesOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyRulesOutputReference;

new IamDenyPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule">putDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule">resetDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenyRule` <a name="putDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule"></a>

```java
public void putDenyRule(IamDenyPolicyRulesDenyRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `resetDenyRule` <a name="resetDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```java
public void resetDenyRule()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule">denyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput">denyRuleInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denyRule`<sup>Required</sup> <a name="denyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule"></a>

```java
public IamDenyPolicyRulesDenyRuleOutputReference getDenyRule();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `denyRuleInput`<sup>Optional</sup> <a name="denyRuleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```java
public IamDenyPolicyRulesDenyRule getDenyRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>

---


### IamDenyPolicyTimeoutsOutputReference <a name="IamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_deny_policy.IamDenyPolicyTimeoutsOutputReference;

new IamDenyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---



