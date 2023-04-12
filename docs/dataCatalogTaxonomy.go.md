# `dataCatalogTaxonomy` Submodule <a name="`dataCatalogTaxonomy` Submodule" id="@cdktf/provider-google.dataCatalogTaxonomy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTaxonomy <a name="DataCatalogTaxonomy" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy google_data_catalog_taxonomy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

datacatalogtaxonomy.NewDataCatalogTaxonomy(scope Construct, id *string, config DataCatalogTaxonomyConfig) DataCatalogTaxonomy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig">DataCatalogTaxonomyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig">DataCatalogTaxonomyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetActivatedPolicyTypes">ResetActivatedPolicyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts"></a>

```go
func PutTimeouts(value DataCatalogTaxonomyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>

---

##### `ResetActivatedPolicyTypes` <a name="ResetActivatedPolicyTypes" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetActivatedPolicyTypes"></a>

```go
func ResetActivatedPolicyTypes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

datacatalogtaxonomy.DataCatalogTaxonomy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

datacatalogtaxonomy.DataCatalogTaxonomy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

datacatalogtaxonomy.DataCatalogTaxonomy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference">DataCatalogTaxonomyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypesInput">ActivatedPolicyTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypes">ActivatedPolicyTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeouts"></a>

```go
func Timeouts() DataCatalogTaxonomyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference">DataCatalogTaxonomyTimeoutsOutputReference</a>

---

##### `ActivatedPolicyTypesInput`<sup>Optional</sup> <a name="ActivatedPolicyTypesInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypesInput"></a>

```go
func ActivatedPolicyTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActivatedPolicyTypes`<sup>Required</sup> <a name="ActivatedPolicyTypes" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.activatedPolicyTypes"></a>

```go
func ActivatedPolicyTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTaxonomyConfig <a name="DataCatalogTaxonomyConfig" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

&datacatalogtaxonomy.DataCatalogTaxonomyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ActivatedPolicyTypes: *[]*string,
	Description: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.activatedPolicyTypes">ActivatedPolicyTypes</a></code> | <code>*[]*string</code> | A list of policy types that are activated for this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.description">Description</a></code> | <code>*string</code> | Description of this taxonomy. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#id DataCatalogTaxonomy#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#project DataCatalogTaxonomy#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.region">Region</a></code> | <code>*string</code> | Taxonomy location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name of this taxonomy.

It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#display_name DataCatalogTaxonomy#display_name}

---

##### `ActivatedPolicyTypes`<sup>Optional</sup> <a name="ActivatedPolicyTypes" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.activatedPolicyTypes"></a>

```go
ActivatedPolicyTypes *[]*string
```

- *Type:* *[]*string

A list of policy types that are activated for this taxonomy.

If not set,
defaults to an empty list. Possible values: ["POLICY_TYPE_UNSPECIFIED", "FINE_GRAINED_ACCESS_CONTROL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#activated_policy_types DataCatalogTaxonomy#activated_policy_types}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of this taxonomy.

It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#description DataCatalogTaxonomy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#id DataCatalogTaxonomy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#project DataCatalogTaxonomy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Taxonomy location region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#region DataCatalogTaxonomy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyConfig.property.timeouts"></a>

```go
Timeouts DataCatalogTaxonomyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts">DataCatalogTaxonomyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#timeouts DataCatalogTaxonomy#timeouts}

---

### DataCatalogTaxonomyTimeouts <a name="DataCatalogTaxonomyTimeouts" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

&datacatalogtaxonomy.DataCatalogTaxonomyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#create DataCatalogTaxonomy#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#delete DataCatalogTaxonomy#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#update DataCatalogTaxonomy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#create DataCatalogTaxonomy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#delete DataCatalogTaxonomy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy#update DataCatalogTaxonomy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTaxonomyTimeoutsOutputReference <a name="DataCatalogTaxonomyTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomy"

datacatalogtaxonomy.NewDataCatalogTaxonomyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogTaxonomyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTaxonomy.DataCatalogTaxonomyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



