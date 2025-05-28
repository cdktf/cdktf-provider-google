# `apigeeSecurityProfileV2` Submodule <a name="`apigeeSecurityProfileV2` Submodule" id="@cdktf/provider-google.apigeeSecurityProfileV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityProfileV2 <a name="ApigeeSecurityProfileV2" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2 google_apigee_security_profile_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2;

ApigeeSecurityProfileV2.Builder.create(Construct scope, java.lang.String id)
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
    .orgId(java.lang.String)
    .profileAssessmentConfigs(IResolvable)
    .profileAssessmentConfigs(java.util.List<ApigeeSecurityProfileV2ProfileAssessmentConfigs>)
    .profileId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeSecurityProfileV2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileAssessmentConfigs">profileAssessmentConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>></code> | profile_assessment_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Resource ID of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#org_id ApigeeSecurityProfileV2#org_id}

---

##### `profileAssessmentConfigs`<sup>Required</sup> <a name="profileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileAssessmentConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>>

profile_assessment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#profile_assessment_configs ApigeeSecurityProfileV2#profile_assessment_configs}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Resource ID of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#profile_id ApigeeSecurityProfileV2#profile_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#description ApigeeSecurityProfileV2#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#timeouts ApigeeSecurityProfileV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs">putProfileAssessmentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProfileAssessmentConfigs` <a name="putProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs"></a>

```java
public void putProfileAssessmentConfigs(IResolvable OR java.util.List<ApigeeSecurityProfileV2ProfileAssessmentConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts"></a>

```java
public void putTimeouts(ApigeeSecurityProfileV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2;

ApigeeSecurityProfileV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2;

ApigeeSecurityProfileV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2;

ApigeeSecurityProfileV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2;

ApigeeSecurityProfileV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeSecurityProfileV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeSecurityProfileV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeSecurityProfileV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityProfileV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs">profileAssessmentConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput">profileAssessmentConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileAssessmentConfigs`<sup>Required</sup> <a name="profileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs"></a>

```java
public ApigeeSecurityProfileV2ProfileAssessmentConfigsList getProfileAssessmentConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts"></a>

```java
public ApigeeSecurityProfileV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `profileAssessmentConfigsInput`<sup>Optional</sup> <a name="profileAssessmentConfigsInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput"></a>

```java
public java.lang.Object getProfileAssessmentConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityProfileV2Config <a name="ApigeeSecurityProfileV2Config" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2Config;

ApigeeSecurityProfileV2Config.builder()
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
    .orgId(java.lang.String)
    .profileAssessmentConfigs(IResolvable)
    .profileAssessmentConfigs(java.util.List<ApigeeSecurityProfileV2ProfileAssessmentConfigs>)
    .profileId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeSecurityProfileV2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs">profileAssessmentConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>></code> | profile_assessment_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Resource ID of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Description of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#org_id ApigeeSecurityProfileV2#org_id}

---

##### `profileAssessmentConfigs`<sup>Required</sup> <a name="profileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs"></a>

```java
public java.lang.Object getProfileAssessmentConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>>

profile_assessment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#profile_assessment_configs ApigeeSecurityProfileV2#profile_assessment_configs}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Resource ID of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#profile_id ApigeeSecurityProfileV2#profile_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#description ApigeeSecurityProfileV2#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts"></a>

```java
public ApigeeSecurityProfileV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#timeouts ApigeeSecurityProfileV2#timeouts}

---

### ApigeeSecurityProfileV2ProfileAssessmentConfigs <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2ProfileAssessmentConfigs;

ApigeeSecurityProfileV2ProfileAssessmentConfigs.builder()
    .assessment(java.lang.String)
    .weight(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment">assessment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight">weight</a></code> | <code>java.lang.String</code> | The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"]. |

---

##### `assessment`<sup>Required</sup> <a name="assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment"></a>

```java
public java.lang.String getAssessment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight"></a>

```java
public java.lang.String getWeight();
```

- *Type:* java.lang.String

The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#weight ApigeeSecurityProfileV2#weight}

---

### ApigeeSecurityProfileV2Timeouts <a name="ApigeeSecurityProfileV2Timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2Timeouts;

ApigeeSecurityProfileV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityProfileV2ProfileAssessmentConfigsList <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsList" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList;

new ApigeeSecurityProfileV2ProfileAssessmentConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get"></a>

```java
public ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>>

---


### ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference;

new ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput">assessmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment">assessment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight">weight</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assessmentInput`<sup>Optional</sup> <a name="assessmentInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput"></a>

```java
public java.lang.String getAssessmentInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput"></a>

```java
public java.lang.String getWeightInput();
```

- *Type:* java.lang.String

---

##### `assessment`<sup>Required</sup> <a name="assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment"></a>

```java
public java.lang.String getAssessment();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight"></a>

```java
public java.lang.String getWeight();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs">ApigeeSecurityProfileV2ProfileAssessmentConfigs</a>

---


### ApigeeSecurityProfileV2TimeoutsOutputReference <a name="ApigeeSecurityProfileV2TimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_security_profile_v2.ApigeeSecurityProfileV2TimeoutsOutputReference;

new ApigeeSecurityProfileV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

---



