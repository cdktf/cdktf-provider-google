# `dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupTransitiveMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMemberships(Construct Scope, string Id, DataGoogleCloudIdentityGroupTransitiveMembershipsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig">DataGoogleCloudIdentityGroupTransitiveMembershipsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig">DataGoogleCloudIdentityGroupTransitiveMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupTransitiveMemberships.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupTransitiveMemberships.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupTransitiveMemberships.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupTransitiveMemberships.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupTransitiveMemberships to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroupTransitiveMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_identity_group_transitive_memberships#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupTransitiveMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships">Memberships</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Memberships`<sup>Required</sup> <a name="Memberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList Memberships { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsConfig <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Group,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group">Group</a></code> | <code>string</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships {

};
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey {

};
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType">RelationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `PreferredMemberKey`<sup>Required</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList PreferredMemberKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType"></a>

```csharp
public string RelationType { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a>

---



