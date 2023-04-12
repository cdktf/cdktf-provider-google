# `projectUsageExportBucket` Submodule <a name="`projectUsageExportBucket` Submodule" id="@cdktf/provider-google.projectUsageExportBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectUsageExportBucket <a name="ProjectUsageExportBucket" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket google_project_usage_export_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

projectusageexportbucket.NewProjectUsageExportBucket(scope Construct, id *string, config ProjectUsageExportBucketConfig) ProjectUsageExportBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig">ProjectUsageExportBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig">ProjectUsageExportBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts"></a>

```go
func PutTimeouts(value ProjectUsageExportBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

projectusageexportbucket.ProjectUsageExportBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

projectusageexportbucket.ProjectUsageExportBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

projectusageexportbucket.ProjectUsageExportBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference">ProjectUsageExportBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeouts"></a>

```go
func Timeouts() ProjectUsageExportBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference">ProjectUsageExportBucketTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectUsageExportBucketConfig <a name="ProjectUsageExportBucketConfig" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

&projectusageexportbucket.ProjectUsageExportBucketConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	Id: *string,
	Prefix: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The bucket to store reports in. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#id ProjectUsageExportBucket#id}. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.prefix">Prefix</a></code> | <code>*string</code> | A prefix for the reports, for instance, the project name. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.project">Project</a></code> | <code>*string</code> | The project to set the export bucket on. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The bucket to store reports in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#bucket_name ProjectUsageExportBucket#bucket_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#id ProjectUsageExportBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

A prefix for the reports, for instance, the project name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#prefix ProjectUsageExportBucket#prefix}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project to set the export bucket on. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#project ProjectUsageExportBucket#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.timeouts"></a>

```go
Timeouts ProjectUsageExportBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#timeouts ProjectUsageExportBucket#timeouts}

---

### ProjectUsageExportBucketTimeouts <a name="ProjectUsageExportBucketTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

&projectusageexportbucket.ProjectUsageExportBucketTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#create ProjectUsageExportBucket#create}. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#delete ProjectUsageExportBucket#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#create ProjectUsageExportBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket#delete ProjectUsageExportBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectUsageExportBucketTimeoutsOutputReference <a name="ProjectUsageExportBucketTimeoutsOutputReference" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectusageexportbucket"

projectusageexportbucket.NewProjectUsageExportBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectUsageExportBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



