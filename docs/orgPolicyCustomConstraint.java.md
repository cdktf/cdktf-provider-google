# `orgPolicyCustomConstraint` Submodule <a name="`orgPolicyCustomConstraint` Submodule" id="@cdktf/provider-google.orgPolicyCustomConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyCustomConstraint <a name="OrgPolicyCustomConstraint" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint google_org_policy_custom_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraint;

OrgPolicyCustomConstraint.Builder.create(Construct scope, java.lang.String id)
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
    .actionType(java.lang.String)
    .condition(java.lang.String)
    .methodTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .resourceTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OrgPolicyCustomConstraintTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.actionType">actionType</a></code> | <code>java.lang.String</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.condition">condition</a></code> | <code>java.lang.String</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.actionType"></a>

- *Type:* java.lang.String

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.condition"></a>

- *Type:* java.lang.String

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.methodTypes"></a>

- *Type:* java.util.List<java.lang.String>

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.resourceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts"></a>

```java
public void putTimeouts(OrgPolicyCustomConstraintTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraint;

OrgPolicyCustomConstraint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraint;

OrgPolicyCustomConstraint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraint;

OrgPolicyCustomConstraint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraint;

OrgPolicyCustomConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrgPolicyCustomConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrgPolicyCustomConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrgPolicyCustomConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyCustomConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput">methodTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts"></a>

```java
public OrgPolicyCustomConstraintTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `methodTypesInput`<sup>Optional</sup> <a name="methodTypesInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput"></a>

```java
public java.util.List<java.lang.String> getMethodTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes"></a>

```java
public java.util.List<java.lang.String> getMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyCustomConstraintConfig <a name="OrgPolicyCustomConstraintConfig" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraintConfig;

OrgPolicyCustomConstraintConfig.builder()
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
    .actionType(java.lang.String)
    .condition(java.lang.String)
    .methodTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .resourceTypes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OrgPolicyCustomConstraintTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType">actionType</a></code> | <code>java.lang.String</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition">condition</a></code> | <code>java.lang.String</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes">methodTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes"></a>

```java
public java.util.List<java.lang.String> getMethodTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts"></a>

```java
public OrgPolicyCustomConstraintTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}

---

### OrgPolicyCustomConstraintTimeouts <a name="OrgPolicyCustomConstraintTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraintTimeouts;

OrgPolicyCustomConstraintTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyCustomConstraintTimeoutsOutputReference <a name="OrgPolicyCustomConstraintTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.org_policy_custom_constraint.OrgPolicyCustomConstraintTimeoutsOutputReference;

new OrgPolicyCustomConstraintTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---



