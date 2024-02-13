# `orgPolicyPolicy` Submodule <a name="`orgPolicyPolicy` Submodule" id="@cdktf/provider-google.orgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyPolicy <a name="OrgPolicyPolicy" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicy;

OrgPolicyPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .dryRunSpec(OrgPolicyPolicyDryRunSpec)
//  .id(java.lang.String)
//  .spec(OrgPolicyPolicySpec)
//  .timeouts(OrgPolicyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `dryRunSpec`<sup>Optional</sup> <a name="dryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dryRunSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec">putDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec">resetDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDryRunSpec` <a name="putDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec"></a>

```java
public void putDryRunSpec(OrgPolicyPolicyDryRunSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec"></a>

```java
public void putSpec(OrgPolicyPolicySpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts"></a>

```java
public void putTimeouts(OrgPolicyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---

##### `resetDryRunSpec` <a name="resetDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec"></a>

```java
public void resetDryRunSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicy;

OrgPolicyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicy;

OrgPolicyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicy;

OrgPolicyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicy;

OrgPolicyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrgPolicyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrgPolicyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput">dryRunSpecInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dryRunSpec`<sup>Required</sup> <a name="dryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec"></a>

```java
public OrgPolicyPolicyDryRunSpecOutputReference getDryRunSpec();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec"></a>

```java
public OrgPolicyPolicySpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts"></a>

```java
public OrgPolicyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `dryRunSpecInput`<sup>Optional</sup> <a name="dryRunSpecInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput"></a>

```java
public OrgPolicyPolicyDryRunSpec getDryRunSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput"></a>

```java
public OrgPolicyPolicySpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyPolicyConfig <a name="OrgPolicyPolicyConfig" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyConfig;

OrgPolicyPolicyConfig.builder()
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
//  .dryRunSpec(OrgPolicyPolicyDryRunSpec)
//  .id(java.lang.String)
//  .spec(OrgPolicyPolicySpec)
//  .timeouts(OrgPolicyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `dryRunSpec`<sup>Optional</sup> <a name="dryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec"></a>

```java
public OrgPolicyPolicyDryRunSpec getDryRunSpec();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec"></a>

```java
public OrgPolicyPolicySpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts"></a>

```java
public OrgPolicyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

### OrgPolicyPolicyDryRunSpec <a name="OrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpec;

OrgPolicyPolicyDryRunSpec.builder()
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .reset(java.lang.Boolean)
//  .reset(IResolvable)
//  .rules(IResolvable)
//  .rules(java.util.List<OrgPolicyPolicyDryRunSpecRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>></code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the inheritance behavior for this policy.

If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicyDryRunSpecRules <a name="OrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRules;

OrgPolicyPolicyDryRunSpecRules.builder()
//  .allowAll(java.lang.String)
//  .condition(OrgPolicyPolicyDryRunSpecRulesCondition)
//  .denyAll(java.lang.String)
//  .enforce(java.lang.String)
//  .values(OrgPolicyPolicyDryRunSpecRulesValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | Setting this to `"TRUE"` means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | Setting this to `"TRUE"` means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce">enforce</a></code> | <code>java.lang.String</code> | If `"TRUE"`, then the policy is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

Setting this to `"TRUE"` means that all values are allowed.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

Setting this to `"TRUE"` means that all values are denied.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

If `"TRUE"`, then the policy is enforced.

If `"FALSE"`, then any configuration is acceptable. This field can be set only in policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesValues getValues();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicyDryRunSpecRulesCondition <a name="OrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesCondition;

OrgPolicyPolicyDryRunSpecRulesCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicyDryRunSpecRulesValues <a name="OrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesValues;

OrgPolicyPolicyDryRunSpecRulesValues.builder()
//  .allowedValues(java.util.List<java.lang.String>)
//  .deniedValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicySpec <a name="OrgPolicyPolicySpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpec;

OrgPolicyPolicySpec.builder()
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .reset(java.lang.Boolean)
//  .reset(IResolvable)
//  .rules(IResolvable)
//  .rules(java.util.List<OrgPolicyPolicySpecRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the inheritance behavior for this `Policy`. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>></code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the inheritance behavior for this `Policy`.

If `inherit_from_parent` is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource.

This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicySpecRules <a name="OrgPolicyPolicySpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRules;

OrgPolicyPolicySpecRules.builder()
//  .allowAll(java.lang.String)
//  .condition(OrgPolicyPolicySpecRulesCondition)
//  .denyAll(java.lang.String)
//  .enforce(java.lang.String)
//  .values(OrgPolicyPolicySpecRulesValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | Setting this to `"TRUE"` means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | Setting this to `"TRUE"` means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>java.lang.String</code> | If `"TRUE"`, then the `Policy` is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

Setting this to `"TRUE"` means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition"></a>

```java
public OrgPolicyPolicySpecRulesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

Setting this to `"TRUE"` means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

If `"TRUE"`, then the `Policy` is enforced.

If `"FALSE"`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values"></a>

```java
public OrgPolicyPolicySpecRulesValues getValues();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicySpecRulesCondition <a name="OrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesCondition;

OrgPolicyPolicySpecRulesCondition.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicySpecRulesValues <a name="OrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesValues;

OrgPolicyPolicySpecRulesValues.builder()
//  .allowedValues(java.util.List<java.lang.String>)
//  .deniedValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicyTimeouts <a name="OrgPolicyPolicyTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyTimeouts;

OrgPolicyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyPolicyDryRunSpecOutputReference <a name="OrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecOutputReference;

new OrgPolicyPolicyDryRunSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<OrgPolicyPolicyDryRunSpecRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>>

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```java
public void resetReset()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">resetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```java
public java.lang.Object getResetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>>

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicyDryRunSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---


### OrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference;

new OrgPolicyPolicyDryRunSpecRulesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### OrgPolicyPolicyDryRunSpecRulesList <a name="OrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesList;

new OrgPolicyPolicyDryRunSpecRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>>

---


### OrgPolicyPolicyDryRunSpecRulesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesOutputReference;

new OrgPolicyPolicyDryRunSpecRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```java
public void putCondition(OrgPolicyPolicyDryRunSpecRulesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```java
public void putValues(OrgPolicyPolicyDryRunSpecRulesValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```java
public void resetAllowAll()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```java
public void resetDenyAll()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesValuesOutputReference getValues();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```java
public java.lang.String getAllowAllInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```java
public java.lang.String getDenyAllInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesValues getValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>

---


### OrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference;

new OrgPolicyPolicyDryRunSpecRulesValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```java
public void resetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```java
public java.util.List<java.lang.String> getDeniedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicyDryRunSpecRulesValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---


### OrgPolicyPolicySpecOutputReference <a name="OrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecOutputReference;

new OrgPolicyPolicySpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<OrgPolicyPolicySpecRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>>

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset"></a>

```java
public void resetReset()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput">resetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules"></a>

```java
public OrgPolicyPolicySpecRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```java
public java.lang.Object getResetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>>

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset"></a>

```java
public java.lang.Object getReset();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicySpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---


### OrgPolicyPolicySpecRulesConditionOutputReference <a name="OrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesConditionOutputReference;

new OrgPolicyPolicySpecRulesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicySpecRulesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---


### OrgPolicyPolicySpecRulesList <a name="OrgPolicyPolicySpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesList;

new OrgPolicyPolicySpecRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get"></a>

```java
public OrgPolicyPolicySpecRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>>

---


### OrgPolicyPolicySpecRulesOutputReference <a name="OrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesOutputReference;

new OrgPolicyPolicySpecRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```java
public void putCondition(OrgPolicyPolicySpecRulesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```java
public void putValues(OrgPolicyPolicySpecRulesValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```java
public void resetAllowAll()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```java
public void resetDenyAll()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```java
public OrgPolicyPolicySpecRulesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```java
public OrgPolicyPolicySpecRulesValuesOutputReference getValues();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```java
public java.lang.String getAllowAllInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```java
public OrgPolicyPolicySpecRulesCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```java
public java.lang.String getDenyAllInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```java
public OrgPolicyPolicySpecRulesValues getValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```java
public java.lang.String getAllowAll();
```

- *Type:* java.lang.String

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```java
public java.lang.String getDenyAll();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>

---


### OrgPolicyPolicySpecRulesValuesOutputReference <a name="OrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicySpecRulesValuesOutputReference;

new OrgPolicyPolicySpecRulesValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```java
public void resetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```java
public java.util.List<java.lang.String> getDeniedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```java
public java.util.List<java.lang.String> getDeniedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```java
public OrgPolicyPolicySpecRulesValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---


### OrgPolicyPolicyTimeoutsOutputReference <a name="OrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_policy.OrgPolicyPolicyTimeoutsOutputReference;

new OrgPolicyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---



