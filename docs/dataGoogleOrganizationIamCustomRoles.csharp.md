# `dataGoogleOrganizationIamCustomRoles` Submodule <a name="`dataGoogleOrganizationIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRoles <a name="DataGoogleOrganizationIamCustomRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles google_organization_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRoles(Construct Scope, string Id, DataGoogleOrganizationIamCustomRolesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig">DataGoogleOrganizationIamCustomRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId">ResetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted">ResetShowDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrgId` <a name="ResetOrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId"></a>

```csharp
private void ResetOrgId()
```

##### `ResetShowDeleted` <a name="ResetShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted"></a>

```csharp
private void ResetShowDeleted()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView"></a>

```csharp
private void ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRoles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRoles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRoles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOrganizationIamCustomRoles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRoles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOrganizationIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput">ShowDeletedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput">ViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted">ShowDeleted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view">View</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles"></a>

```csharp
public DataGoogleOrganizationIamCustomRolesRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ShowDeletedInput`<sup>Optional</sup> <a name="ShowDeletedInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput"></a>

```csharp
public object ShowDeletedInput { get; }
```

- *Type:* object

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput"></a>

```csharp
public string ViewInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `ShowDeleted`<sup>Required</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted"></a>

```csharp
public object ShowDeleted { get; }
```

- *Type:* object

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view"></a>

```csharp
public string View { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRolesConfig <a name="DataGoogleOrganizationIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRolesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string OrgId = null,
    object ShowDeleted = null,
    string View = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId">OrgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted">ShowDeleted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view">View</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrgId`<sup>Optional</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}.

---

##### `ShowDeleted`<sup>Optional</sup> <a name="ShowDeleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted"></a>

```csharp
public object ShowDeleted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view"></a>

```csharp
public string View { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}.

---

### DataGoogleOrganizationIamCustomRolesRoles <a name="DataGoogleOrganizationIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRolesRoles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOrganizationIamCustomRolesRolesList <a name="DataGoogleOrganizationIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRolesRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get"></a>

```csharp
private DataGoogleOrganizationIamCustomRolesRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOrganizationIamCustomRolesRolesOutputReference <a name="DataGoogleOrganizationIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOrganizationIamCustomRolesRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted">Deleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOrganizationIamCustomRolesRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a>

---



