# `data_google_secret_manager_secret_version_access`

Refer to the Terraform Registory for docs: [`data_google_secret_manager_secret_version_access`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access).

# `dataGoogleSecretManagerSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerSecretVersionAccess` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecretVersionAccess <a name="DataGoogleSecretManagerSecretVersionAccess" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access google_secret_manager_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerSecretVersionAccess(Construct Scope, string Id, DataGoogleSecretManagerSecretVersionAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData">SecretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData"></a>

```csharp
public string SecretData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretVersionAccessConfig <a name="DataGoogleSecretManagerSecretVersionAccessConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerSecretVersionAccessConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Secret,
    string Id = null,
    string Project = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}.

---



