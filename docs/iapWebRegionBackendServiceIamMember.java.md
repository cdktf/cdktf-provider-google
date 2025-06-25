# `iapWebRegionBackendServiceIamMember` Submodule <a name="`iapWebRegionBackendServiceIamMember` Submodule" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebRegionBackendServiceIamMember <a name="IapWebRegionBackendServiceIamMember" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member google_iap_web_region_backend_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMember;

IapWebRegionBackendServiceIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .member(java.lang.String)
    .role(java.lang.String)
    .webRegionBackendService(java.lang.String)
//  .condition(IapWebRegionBackendServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.webRegionBackendService">webRegionBackendService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}.

---

##### `webRegionBackendService`<sup>Required</sup> <a name="webRegionBackendService" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.webRegionBackendService"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#condition IapWebRegionBackendServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition"></a>

```java
public void putCondition(IapWebRegionBackendServiceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMember;

IapWebRegionBackendServiceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMember;

IapWebRegionBackendServiceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMember;

IapWebRegionBackendServiceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMember;

IapWebRegionBackendServiceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapWebRegionBackendServiceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapWebRegionBackendServiceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapWebRegionBackendServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IapWebRegionBackendServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference">IapWebRegionBackendServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput">webRegionBackendServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendService">webRegionBackendService</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.condition"></a>

```java
public IapWebRegionBackendServiceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference">IapWebRegionBackendServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.conditionInput"></a>

```java
public IapWebRegionBackendServiceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `webRegionBackendServiceInput`<sup>Optional</sup> <a name="webRegionBackendServiceInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput"></a>

```java
public java.lang.String getWebRegionBackendServiceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `webRegionBackendService`<sup>Required</sup> <a name="webRegionBackendService" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendService"></a>

```java
public java.lang.String getWebRegionBackendService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebRegionBackendServiceIamMemberCondition <a name="IapWebRegionBackendServiceIamMemberCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMemberCondition;

IapWebRegionBackendServiceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#expression IapWebRegionBackendServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#title IapWebRegionBackendServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#description IapWebRegionBackendServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#expression IapWebRegionBackendServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#title IapWebRegionBackendServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#description IapWebRegionBackendServiceIamMember#description}.

---

### IapWebRegionBackendServiceIamMemberConfig <a name="IapWebRegionBackendServiceIamMemberConfig" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMemberConfig;

IapWebRegionBackendServiceIamMemberConfig.builder()
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
    .member(java.lang.String)
    .role(java.lang.String)
    .webRegionBackendService(java.lang.String)
//  .condition(IapWebRegionBackendServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService">webRegionBackendService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}.

---

##### `webRegionBackendService`<sup>Required</sup> <a name="webRegionBackendService" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService"></a>

```java
public java.lang.String getWebRegionBackendService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.condition"></a>

```java
public IapWebRegionBackendServiceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#condition IapWebRegionBackendServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebRegionBackendServiceIamMemberConditionOutputReference <a name="IapWebRegionBackendServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_web_region_backend_service_iam_member.IapWebRegionBackendServiceIamMemberConditionOutputReference;

new IapWebRegionBackendServiceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public IapWebRegionBackendServiceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---



