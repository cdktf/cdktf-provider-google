# `dataCatalogEntry` Submodule <a name="`dataCatalogEntry` Submodule" id="@cdktf/provider-google.dataCatalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntry <a name="DataCatalogEntry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry google_data_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntry(scope Construct, id *string, config DataCatalogEntryConfig) DataCatalogEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig">DataCatalogEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig">DataCatalogEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec">PutGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec">ResetGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource">ResetLinkedResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem">ResetUserSpecifiedSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType">ResetUserSpecifiedType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGcsFilesetSpec` <a name="PutGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec"></a>

```go
func PutGcsFilesetSpec(value DataCatalogEntryGcsFilesetSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts"></a>

```go
func PutTimeouts(value DataCatalogEntryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGcsFilesetSpec` <a name="ResetGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec"></a>

```go
func ResetGcsFilesetSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkedResource` <a name="ResetLinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource"></a>

```go
func ResetLinkedResource()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType"></a>

```go
func ResetType()
```

##### `ResetUserSpecifiedSystem` <a name="ResetUserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem"></a>

```go
func ResetUserSpecifiedSystem()
```

##### `ResetUserSpecifiedType` <a name="ResetUserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType"></a>

```go
func ResetUserSpecifiedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.DataCatalogEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.DataCatalogEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.DataCatalogEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec">BigqueryDateShardedSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec">BigqueryTableSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec">GcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem">IntegratedSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput">EntryGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput">EntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput">GcsFilesetSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput">LinkedResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput">UserSpecifiedSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput">UserSpecifiedTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource">LinkedResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem">UserSpecifiedSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType">UserSpecifiedType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryDateShardedSpec`<sup>Required</sup> <a name="BigqueryDateShardedSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec"></a>

```go
func BigqueryDateShardedSpec() DataCatalogEntryBigqueryDateShardedSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a>

---

##### `BigqueryTableSpec`<sup>Required</sup> <a name="BigqueryTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec"></a>

```go
func BigqueryTableSpec() DataCatalogEntryBigqueryTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a>

---

##### `GcsFilesetSpec`<sup>Required</sup> <a name="GcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec"></a>

```go
func GcsFilesetSpec() DataCatalogEntryGcsFilesetSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a>

---

##### `IntegratedSystem`<sup>Required</sup> <a name="IntegratedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem"></a>

```go
func IntegratedSystem() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts"></a>

```go
func Timeouts() DataCatalogEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntryGroupInput`<sup>Optional</sup> <a name="EntryGroupInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput"></a>

```go
func EntryGroupInput() *string
```

- *Type:* *string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput"></a>

```go
func EntryIdInput() *string
```

- *Type:* *string

---

##### `GcsFilesetSpecInput`<sup>Optional</sup> <a name="GcsFilesetSpecInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput"></a>

```go
func GcsFilesetSpecInput() DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkedResourceInput`<sup>Optional</sup> <a name="LinkedResourceInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput"></a>

```go
func LinkedResourceInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserSpecifiedSystemInput`<sup>Optional</sup> <a name="UserSpecifiedSystemInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput"></a>

```go
func UserSpecifiedSystemInput() *string
```

- *Type:* *string

---

##### `UserSpecifiedTypeInput`<sup>Optional</sup> <a name="UserSpecifiedTypeInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput"></a>

```go
func UserSpecifiedTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup"></a>

```go
func EntryGroup() *string
```

- *Type:* *string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedResource`<sup>Required</sup> <a name="LinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource"></a>

```go
func LinkedResource() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserSpecifiedSystem`<sup>Required</sup> <a name="UserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem"></a>

```go
func UserSpecifiedSystem() *string
```

- *Type:* *string

---

##### `UserSpecifiedType`<sup>Required</sup> <a name="UserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType"></a>

```go
func UserSpecifiedType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryBigqueryDateShardedSpec <a name="DataCatalogEntryBigqueryDateShardedSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryBigqueryDateShardedSpec {

}
```


### DataCatalogEntryBigqueryTableSpec <a name="DataCatalogEntryBigqueryTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryBigqueryTableSpec {

}
```


### DataCatalogEntryBigqueryTableSpecTableSpec <a name="DataCatalogEntryBigqueryTableSpecTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryBigqueryTableSpecTableSpec {

}
```


### DataCatalogEntryBigqueryTableSpecViewSpec <a name="DataCatalogEntryBigqueryTableSpecViewSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryBigqueryTableSpecViewSpec {

}
```


### DataCatalogEntryConfig <a name="DataCatalogEntryConfig" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntryGroup: *string,
	EntryId: *string,
	Description: *string,
	DisplayName: *string,
	GcsFilesetSpec: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec,
	Id: *string,
	LinkedResource: *string,
	Schema: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogEntry.DataCatalogEntryTimeouts,
	Type: *string,
	UserSpecifiedSystem: *string,
	UserSpecifiedType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId">EntryId</a></code> | <code>*string</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description">Description</a></code> | <code>*string</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec">GcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#id DataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource">LinkedResource</a></code> | <code>*string</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema">Schema</a></code> | <code>*string</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type">Type</a></code> | <code>*string</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem">UserSpecifiedSystem</a></code> | <code>*string</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType">UserSpecifiedType</a></code> | <code>*string</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup"></a>

```go
EntryGroup *string
```

- *Type:* *string

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#entry_group DataCatalogEntry#entry_group}

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId"></a>

```go
EntryId *string
```

- *Type:* *string

The id of the entry to create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#entry_id DataCatalogEntry#entry_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#description DataCatalogEntry#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#display_name DataCatalogEntry#display_name}

---

##### `GcsFilesetSpec`<sup>Optional</sup> <a name="GcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec"></a>

```go
GcsFilesetSpec DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#id DataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkedResource`<sup>Optional</sup> <a name="LinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource"></a>

```go
LinkedResource *string
```

- *Type:* *string

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#linked_resource DataCatalogEntry#linked_resource}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#schema DataCatalogEntry#schema}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts"></a>

```go
Timeouts DataCatalogEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#timeouts DataCatalogEntry#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#type DataCatalogEntry#type}

---

##### `UserSpecifiedSystem`<sup>Optional</sup> <a name="UserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem"></a>

```go
UserSpecifiedSystem *string
```

- *Type:* *string

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#user_specified_system DataCatalogEntry#user_specified_system}

---

##### `UserSpecifiedType`<sup>Optional</sup> <a name="UserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType"></a>

```go
UserSpecifiedType *string
```

- *Type:* *string

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#user_specified_type DataCatalogEntry#user_specified_type}

---

### DataCatalogEntryGcsFilesetSpec <a name="DataCatalogEntryGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryGcsFilesetSpec {
	FilePatterns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns">FilePatterns</a></code> | <code>*[]*string</code> | Patterns to identify a set of files in Google Cloud Storage. |

---

##### `FilePatterns`<sup>Required</sup> <a name="FilePatterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns"></a>

```go
FilePatterns *[]*string
```

- *Type:* *[]*string

Patterns to identify a set of files in Google Cloud Storage.

See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
gs://bucket_name/file*: matches files prefixed by file in bucket_name
gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
gs://bucket_name/a/*/b: matches all files in bucket_name that match a/*/b pattern, such as a/c/b, a/d/b
gs://another_bucket/a.txt: matches gs://another_bucket/a.txt

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#file_patterns DataCatalogEntry#file_patterns}

---

### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs {

}
```


### DataCatalogEntryTimeouts <a name="DataCatalogEntryTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

&datacatalogentry.DataCatalogEntryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#create DataCatalogEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#delete DataCatalogEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#update DataCatalogEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#create DataCatalogEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#delete DataCatalogEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry#update DataCatalogEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryBigqueryDateShardedSpecList <a name="DataCatalogEntryBigqueryDateShardedSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryDateShardedSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCatalogEntryBigqueryDateShardedSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get"></a>

```go
func Get(index *f64) DataCatalogEntryBigqueryDateShardedSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCatalogEntryBigqueryDateShardedSpecOutputReference <a name="DataCatalogEntryBigqueryDateShardedSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryDateShardedSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCatalogEntryBigqueryDateShardedSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryBigqueryDateShardedSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a>

---


### DataCatalogEntryBigqueryTableSpecList <a name="DataCatalogEntryBigqueryTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCatalogEntryBigqueryTableSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get"></a>

```go
func Get(index *f64) DataCatalogEntryBigqueryTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCatalogEntryBigqueryTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCatalogEntryBigqueryTableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType">TableSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec">TableSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec">ViewSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableSourceType`<sup>Required</sup> <a name="TableSourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType"></a>

```go
func TableSourceType() *string
```

- *Type:* *string

---

##### `TableSpec`<sup>Required</sup> <a name="TableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec"></a>

```go
func TableSpec() DataCatalogEntryBigqueryTableSpecTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a>

---

##### `ViewSpec`<sup>Required</sup> <a name="ViewSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec"></a>

```go
func ViewSpec() DataCatalogEntryBigqueryTableSpecViewSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryBigqueryTableSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecTableSpecList <a name="DataCatalogEntryBigqueryTableSpecTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecTableSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCatalogEntryBigqueryTableSpecTableSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get"></a>

```go
func Get(index *f64) DataCatalogEntryBigqueryTableSpecTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCatalogEntryBigqueryTableSpecTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecTableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCatalogEntryBigqueryTableSpecTableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry">GroupedEntry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupedEntry`<sup>Required</sup> <a name="GroupedEntry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry"></a>

```go
func GroupedEntry() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryBigqueryTableSpecTableSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecViewSpecList <a name="DataCatalogEntryBigqueryTableSpecViewSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecViewSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCatalogEntryBigqueryTableSpecViewSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get"></a>

```go
func Get(index *f64) DataCatalogEntryBigqueryTableSpecViewSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCatalogEntryBigqueryTableSpecViewSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecViewSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryBigqueryTableSpecViewSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCatalogEntryBigqueryTableSpecViewSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery">ViewQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ViewQuery`<sup>Required</sup> <a name="ViewQuery" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery"></a>

```go
func ViewQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryBigqueryTableSpecViewSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a>

---


### DataCatalogEntryGcsFilesetSpecOutputReference <a name="DataCatalogEntryGcsFilesetSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryGcsFilesetSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogEntryGcsFilesetSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs">SampleGcsFileSpecs</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput">FilePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns">FilePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SampleGcsFileSpecs`<sup>Required</sup> <a name="SampleGcsFileSpecs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs"></a>

```go
func SampleGcsFileSpecs() DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a>

---

##### `FilePatternsInput`<sup>Optional</sup> <a name="FilePatternsInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput"></a>

```go
func FilePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilePatterns`<sup>Required</sup> <a name="FilePatterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns"></a>

```go
func FilePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get"></a>

```go
func Get(index *f64) DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes">SizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes"></a>

```go
func SizeBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a>

---


### DataCatalogEntryTimeoutsOutputReference <a name="DataCatalogEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentry"

datacatalogentry.NewDataCatalogEntryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogEntryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



