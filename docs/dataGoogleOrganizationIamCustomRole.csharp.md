# `dataGoogleOrganizationIamCustomRole` Submodule <a name="`dataGoogleOrganizationIamCustomRole` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRole <a name="DataGoogleOrganizationIamCustomRole" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role google_organization_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRole(Construct Scope, string Id, DataGoogleOrganizationIamCustomRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig">DataGoogleOrganizationIamCustomRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig">DataGoogleOrganizationIamCustomRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRole.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOrganizationIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.deleted">Deleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRoleConfig <a name="DataGoogleOrganizationIamCustomRoleConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OrgId,
    string RoleId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.orgId">OrgId</a></code> | <code>string</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.roleId">RoleId</a></code> | <code>string</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role#org_id DataGoogleOrganizationIamCustomRole#org_id}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role#role_id DataGoogleOrganizationIamCustomRole#role_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



