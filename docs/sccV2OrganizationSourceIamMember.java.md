# `sccV2OrganizationSourceIamMember` Submodule <a name="`sccV2OrganizationSourceIamMember` Submodule" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSourceIamMember <a name="SccV2OrganizationSourceIamMember" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member google_scc_v2_organization_source_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMember;

SccV2OrganizationSourceIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .organization(java.lang.String)
    .role(java.lang.String)
    .source(java.lang.String)
//  .condition(SccV2OrganizationSourceIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#condition SccV2OrganizationSourceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition"></a>

```java
public void putCondition(SccV2OrganizationSourceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMember;

SccV2OrganizationSourceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMember;

SccV2OrganizationSourceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMember;

SccV2OrganizationSourceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMember;

SccV2OrganizationSourceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccV2OrganizationSourceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccV2OrganizationSourceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccV2OrganizationSourceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSourceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition"></a>

```java
public SccV2OrganizationSourceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput"></a>

```java
public SccV2OrganizationSourceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceIamMemberCondition <a name="SccV2OrganizationSourceIamMemberCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMemberCondition;

SccV2OrganizationSourceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}.

---

### SccV2OrganizationSourceIamMemberConfig <a name="SccV2OrganizationSourceIamMemberConfig" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMemberConfig;

SccV2OrganizationSourceIamMemberConfig.builder()
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
    .organization(java.lang.String)
    .role(java.lang.String)
    .source(java.lang.String)
//  .condition(SccV2OrganizationSourceIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition"></a>

```java
public SccV2OrganizationSourceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#condition SccV2OrganizationSourceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceIamMemberConditionOutputReference <a name="SccV2OrganizationSourceIamMemberConditionOutputReference" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_organization_source_iam_member.SccV2OrganizationSourceIamMemberConditionOutputReference;

new SccV2OrganizationSourceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public SccV2OrganizationSourceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---



