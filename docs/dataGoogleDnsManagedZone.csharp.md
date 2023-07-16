# `data_google_dns_managed_zone`

Refer to the Terraform Registory for docs: [`data_google_dns_managed_zone`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/dns_managed_zone).

# `dataGoogleDnsManagedZone` Submodule <a name="`dataGoogleDnsManagedZone` Submodule" id="@cdktf/provider-google.dataGoogleDnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDnsManagedZone <a name="DataGoogleDnsManagedZone" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleDnsManagedZone(Construct Scope, string Id, DataGoogleDnsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig">DataGoogleDnsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig">DataGoogleDnsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDnsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDnsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDnsManagedZone.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.managedZoneId">ManagedZoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedZoneId`<sup>Required</sup> <a name="ManagedZoneId" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.managedZoneId"></a>

```csharp
public double ManagedZoneId { get; }
```

- *Type:* double

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDnsManagedZoneConfig <a name="DataGoogleDnsManagedZoneConfig" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleDnsManagedZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project for the Google Cloud. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/dns_managed_zone#name DataGoogleDnsManagedZone#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDnsManagedZone.DataGoogleDnsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project for the Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/dns_managed_zone#project DataGoogleDnsManagedZone#project}

---



