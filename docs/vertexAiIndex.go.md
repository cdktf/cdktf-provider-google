# `vertexAiIndex` Submodule <a name="`vertexAiIndex` Submodule" id="@cdktf/provider-google.vertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndex <a name="VertexAiIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndex(scope Construct, id *string, config VertexAiIndexConfig) VertexAiIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig">VertexAiIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig">VertexAiIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod">ResetIndexUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata"></a>

```go
func PutMetadata(value VertexAiIndexMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexUpdateMethod` <a name="ResetIndexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod"></a>

```go
func ResetIndexUpdateMethod()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.VertexAiIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.VertexAiIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.VertexAiIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes">DeployedIndexes</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats">IndexStats</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri">MetadataSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput">IndexUpdateMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod">IndexUpdateMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeployedIndexes`<sup>Required</sup> <a name="DeployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes"></a>

```go
func DeployedIndexes() VertexAiIndexDeployedIndexesList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IndexStats`<sup>Required</sup> <a name="IndexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats"></a>

```go
func IndexStats() VertexAiIndexIndexStatsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata"></a>

```go
func Metadata() VertexAiIndexMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a>

---

##### `MetadataSchemaUri`<sup>Required</sup> <a name="MetadataSchemaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri"></a>

```go
func MetadataSchemaUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts"></a>

```go
func Timeouts() VertexAiIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexUpdateMethodInput`<sup>Optional</sup> <a name="IndexUpdateMethodInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput"></a>

```go
func IndexUpdateMethodInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput"></a>

```go
func MetadataInput() VertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexUpdateMethod`<sup>Required</sup> <a name="IndexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod"></a>

```go
func IndexUpdateMethod() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexConfig <a name="VertexAiIndexConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	Id: *string,
	IndexUpdateMethod: *string,
	Labels: *map[string]*string,
	Metadata: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexMetadata,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#id VertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod">IndexUpdateMethod</a></code> | <code>*string</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#project VertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region">Region</a></code> | <code>*string</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#display_name VertexAiIndex#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Index.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#description VertexAiIndex#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#id VertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexUpdateMethod`<sup>Optional</sup> <a name="IndexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod"></a>

```go
IndexUpdateMethod *string
```

- *Type:* *string

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.
BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#index_update_method VertexAiIndex#index_update_method}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Indexes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#labels VertexAiIndex#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata"></a>

```go
Metadata VertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#metadata VertexAiIndex#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#project VertexAiIndex#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#region VertexAiIndex#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts"></a>

```go
Timeouts VertexAiIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#timeouts VertexAiIndex#timeouts}

---

### VertexAiIndexDeployedIndexes <a name="VertexAiIndexDeployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexDeployedIndexes {

}
```


### VertexAiIndexIndexStats <a name="VertexAiIndexIndexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexIndexStats {

}
```


### VertexAiIndexMetadata <a name="VertexAiIndexMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexMetadata {
	Config: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexMetadataConfig,
	ContentsDeltaUri: *string,
	IsCompleteOverwrite: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri">ContentsDeltaUri</a></code> | <code>*string</code> | Allows inserting, updating  or deleting the contents of the Matching Engine Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite">IsCompleteOverwrite</a></code> | <code>interface{}</code> | If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config"></a>

```go
Config VertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#config VertexAiIndex#config}

---

##### `ContentsDeltaUri`<sup>Optional</sup> <a name="ContentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri"></a>

```go
ContentsDeltaUri *string
```

- *Type:* *string

Allows inserting, updating  or deleting the contents of the Matching Engine Index.

The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#contents_delta_uri VertexAiIndex#contents_delta_uri}

---

##### `IsCompleteOverwrite`<sup>Optional</sup> <a name="IsCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite"></a>

```go
IsCompleteOverwrite interface{}
```

- *Type:* interface{}

If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#is_complete_overwrite VertexAiIndex#is_complete_overwrite}

---

### VertexAiIndexMetadataConfig <a name="VertexAiIndexMetadataConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexMetadataConfig {
	Dimensions: *f64,
	AlgorithmConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig,
	ApproximateNeighborsCount: *f64,
	DistanceMeasureType: *string,
	FeatureNormType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions">Dimensions</a></code> | <code>*f64</code> | The number of dimensions of the input vectors. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig">AlgorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | algorithm_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount">ApproximateNeighborsCount</a></code> | <code>*f64</code> | The default number of neighbors to find via approximate search before exact reordering is performed. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | Type of normalization to be carried out on each vector. |

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions"></a>

```go
Dimensions *f64
```

- *Type:* *f64

The number of dimensions of the input vectors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#dimensions VertexAiIndex#dimensions}

---

##### `AlgorithmConfig`<sup>Optional</sup> <a name="AlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig"></a>

```go
AlgorithmConfig VertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

algorithm_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#algorithm_config VertexAiIndex#algorithm_config}

---

##### `ApproximateNeighborsCount`<sup>Optional</sup> <a name="ApproximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount"></a>

```go
ApproximateNeighborsCount *f64
```

- *Type:* *f64

The default number of neighbors to find via approximate search before exact reordering is performed.

Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#approximate_neighbors_count VertexAiIndex#approximate_neighbors_count}

---

##### `DistanceMeasureType`<sup>Optional</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType"></a>

```go
DistanceMeasureType *string
```

- *Type:* *string

The distance measure used in nearest neighbor search.

The value must be one of the followings:
SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
L1_DISTANCE: Manhattan (L_1) Distance
COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#distance_measure_type VertexAiIndex#distance_measure_type}

---

##### `FeatureNormType`<sup>Optional</sup> <a name="FeatureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType"></a>

```go
FeatureNormType *string
```

- *Type:* *string

Type of normalization to be carried out on each vector.

The value must be one of the followings:
UNIT_L2_NORM: Unit L2 normalization type
NONE: No normalization type is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#feature_norm_type VertexAiIndex#feature_norm_type}

---

### VertexAiIndexMetadataConfigAlgorithmConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexMetadataConfigAlgorithmConfig {
	BruteForceConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
	TreeAhConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `BruteForceConfig`<sup>Optional</sup> <a name="BruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig"></a>

```go
BruteForceConfig VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#brute_force_config VertexAiIndex#brute_force_config}

---

##### `TreeAhConfig`<sup>Optional</sup> <a name="TreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig"></a>

```go
TreeAhConfig VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#tree_ah_config VertexAiIndex#tree_ah_config}

---

### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig {

}
```


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
	LeafNodeEmbeddingCount: *f64,
	LeafNodesToSearchPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*f64</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent">LeafNodesToSearchPercent</a></code> | <code>*f64</code> | The default percentage of leaf nodes that any query may be searched. |

---

##### `LeafNodeEmbeddingCount`<sup>Optional</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```go
LeafNodeEmbeddingCount *f64
```

- *Type:* *f64

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#leaf_node_embedding_count VertexAiIndex#leaf_node_embedding_count}

---

##### `LeafNodesToSearchPercent`<sup>Optional</sup> <a name="LeafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent"></a>

```go
LeafNodesToSearchPercent *f64
```

- *Type:* *f64

The default percentage of leaf nodes that any query may be searched.

Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#leaf_nodes_to_search_percent VertexAiIndex#leaf_nodes_to_search_percent}

---

### VertexAiIndexTimeouts <a name="VertexAiIndexTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

&vertexaiindex.VertexAiIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#create VertexAiIndex#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#delete VertexAiIndex#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#update VertexAiIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#create VertexAiIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#delete VertexAiIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#update VertexAiIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexDeployedIndexesList <a name="VertexAiIndexDeployedIndexesList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexDeployedIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiIndexDeployedIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get"></a>

```go
func Get(index *f64) VertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiIndexDeployedIndexesOutputReference <a name="VertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexDeployedIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiIndexDeployedIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">DeployedIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedIndexId`<sup>Required</sup> <a name="DeployedIndexId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```go
func DeployedIndexId() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexDeployedIndexes
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a>

---


### VertexAiIndexIndexStatsList <a name="VertexAiIndexIndexStatsList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexIndexStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiIndexIndexStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get"></a>

```go
func Get(index *f64) VertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiIndexIndexStatsOutputReference <a name="VertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexIndexStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiIndexIndexStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount">ShardsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount">VectorsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShardsCount`<sup>Required</sup> <a name="ShardsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```go
func ShardsCount() *f64
```

- *Type:* *f64

---

##### `VectorsCount`<sup>Required</sup> <a name="VectorsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```go
func VectorsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexIndexStats
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig">PutBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig">PutTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig">ResetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig">ResetTreeAhConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBruteForceConfig` <a name="PutBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig"></a>

```go
func PutBruteForceConfig(value VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `PutTreeAhConfig` <a name="PutTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig"></a>

```go
func PutTreeAhConfig(value VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `ResetBruteForceConfig` <a name="ResetBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig"></a>

```go
func ResetBruteForceConfig()
```

##### `ResetTreeAhConfig` <a name="ResetTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig"></a>

```go
func ResetTreeAhConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput">BruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput">TreeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BruteForceConfig`<sup>Required</sup> <a name="BruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```go
func BruteForceConfig() VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a>

---

##### `TreeAhConfig`<sup>Required</sup> <a name="TreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```go
func TreeAhConfig() VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a>

---

##### `BruteForceConfigInput`<sup>Optional</sup> <a name="BruteForceConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput"></a>

```go
func BruteForceConfigInput() VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `TreeAhConfigInput`<sup>Optional</sup> <a name="TreeAhConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput"></a>

```go
func TreeAhConfigInput() VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">ResetLeafNodeEmbeddingCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent">ResetLeafNodesToSearchPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafNodeEmbeddingCount` <a name="ResetLeafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```go
func ResetLeafNodeEmbeddingCount()
```

##### `ResetLeafNodesToSearchPercent` <a name="ResetLeafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent"></a>

```go
func ResetLeafNodesToSearchPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">LeafNodeEmbeddingCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput">LeafNodesToSearchPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">LeafNodesToSearchPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="LeafNodeEmbeddingCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```go
func LeafNodeEmbeddingCountInput() *f64
```

- *Type:* *f64

---

##### `LeafNodesToSearchPercentInput`<sup>Optional</sup> <a name="LeafNodesToSearchPercentInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput"></a>

```go
func LeafNodesToSearchPercentInput() *f64
```

- *Type:* *f64

---

##### `LeafNodeEmbeddingCount`<sup>Required</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```go
func LeafNodeEmbeddingCount() *f64
```

- *Type:* *f64

---

##### `LeafNodesToSearchPercent`<sup>Required</sup> <a name="LeafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```go
func LeafNodesToSearchPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### VertexAiIndexMetadataConfigOutputReference <a name="VertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexMetadataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexMetadataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig">PutAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig">ResetAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount">ResetApproximateNeighborsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType">ResetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType">ResetFeatureNormType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlgorithmConfig` <a name="PutAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig"></a>

```go
func PutAlgorithmConfig(value VertexAiIndexMetadataConfigAlgorithmConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `ResetAlgorithmConfig` <a name="ResetAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig"></a>

```go
func ResetAlgorithmConfig()
```

##### `ResetApproximateNeighborsCount` <a name="ResetApproximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount"></a>

```go
func ResetApproximateNeighborsCount()
```

##### `ResetDistanceMeasureType` <a name="ResetDistanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType"></a>

```go
func ResetDistanceMeasureType()
```

##### `ResetFeatureNormType` <a name="ResetFeatureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType"></a>

```go
func ResetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">AlgorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput">AlgorithmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput">ApproximateNeighborsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput">DistanceMeasureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput">FeatureNormTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">ApproximateNeighborsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions">Dimensions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmConfig`<sup>Required</sup> <a name="AlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```go
func AlgorithmConfig() VertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a>

---

##### `AlgorithmConfigInput`<sup>Optional</sup> <a name="AlgorithmConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput"></a>

```go
func AlgorithmConfigInput() VertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `ApproximateNeighborsCountInput`<sup>Optional</sup> <a name="ApproximateNeighborsCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput"></a>

```go
func ApproximateNeighborsCountInput() *f64
```

- *Type:* *f64

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *f64
```

- *Type:* *f64

---

##### `DistanceMeasureTypeInput`<sup>Optional</sup> <a name="DistanceMeasureTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput"></a>

```go
func DistanceMeasureTypeInput() *string
```

- *Type:* *string

---

##### `FeatureNormTypeInput`<sup>Optional</sup> <a name="FeatureNormTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput"></a>

```go
func FeatureNormTypeInput() *string
```

- *Type:* *string

---

##### `ApproximateNeighborsCount`<sup>Required</sup> <a name="ApproximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```go
func ApproximateNeighborsCount() *f64
```

- *Type:* *f64

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```go
func Dimensions() *f64
```

- *Type:* *f64

---

##### `DistanceMeasureType`<sup>Required</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```go
func DistanceMeasureType() *string
```

- *Type:* *string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```go
func FeatureNormType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---


### VertexAiIndexMetadataOutputReference <a name="VertexAiIndexMetadataOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri">ResetContentsDeltaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite">ResetIsCompleteOverwrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig"></a>

```go
func PutConfig(value VertexAiIndexMetadataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetContentsDeltaUri` <a name="ResetContentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri"></a>

```go
func ResetContentsDeltaUri()
```

##### `ResetIsCompleteOverwrite` <a name="ResetIsCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite"></a>

```go
func ResetIsCompleteOverwrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput">ContentsDeltaUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput">IsCompleteOverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri">ContentsDeltaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">IsCompleteOverwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config"></a>

```go
func Config() VertexAiIndexMetadataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput"></a>

```go
func ConfigInput() VertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `ContentsDeltaUriInput`<sup>Optional</sup> <a name="ContentsDeltaUriInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput"></a>

```go
func ContentsDeltaUriInput() *string
```

- *Type:* *string

---

##### `IsCompleteOverwriteInput`<sup>Optional</sup> <a name="IsCompleteOverwriteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput"></a>

```go
func IsCompleteOverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `ContentsDeltaUri`<sup>Required</sup> <a name="ContentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```go
func ContentsDeltaUri() *string
```

- *Type:* *string

---

##### `IsCompleteOverwrite`<sup>Required</sup> <a name="IsCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```go
func IsCompleteOverwrite() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---


### VertexAiIndexTimeoutsOutputReference <a name="VertexAiIndexTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiindex"

vertexaiindex.NewVertexAiIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



