# `dataGoogleSecretManagerSecret` Submodule <a name="`dataGoogleSecretManagerSecret` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecret <a name="DataGoogleSecretManagerSecret" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecret(scope Construct, id *string, config DataGoogleSecretManagerSecretConfig) DataGoogleSecretManagerSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.DataGoogleSecretManagerSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.DataGoogleSecretManagerSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.DataGoogleSecretManagerSecret_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication"></a>

```go
func Replication() DataGoogleSecretManagerSecretReplicationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation"></a>

```go
func Rotation() DataGoogleSecretManagerSecretRotationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics"></a>

```go
func Topics() DataGoogleSecretManagerSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretConfig <a name="DataGoogleSecretManagerSecretConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret#id DataGoogleSecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret#project DataGoogleSecretManagerSecret#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

This must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret#secret_id DataGoogleSecretManagerSecret#secret_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret#id DataGoogleSecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret#project DataGoogleSecretManagerSecret#project}.

---

### DataGoogleSecretManagerSecretReplication <a name="DataGoogleSecretManagerSecretReplication" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretReplication {

}
```


### DataGoogleSecretManagerSecretReplicationUserManaged <a name="DataGoogleSecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretReplicationUserManaged {

}
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas {

}
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {

}
```


### DataGoogleSecretManagerSecretRotation <a name="DataGoogleSecretManagerSecretRotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretRotation {

}
```


### DataGoogleSecretManagerSecretTopics <a name="DataGoogleSecretManagerSecretTopics" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

&datagooglesecretmanagersecret.DataGoogleSecretManagerSecretTopics {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretReplicationList <a name="DataGoogleSecretManagerSecretReplicationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretReplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretReplicationOutputReference <a name="DataGoogleSecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic">Automatic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic"></a>

```go
func Automatic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UserManaged`<sup>Required</sup> <a name="UserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```go
func UserManaged() DataGoogleSecretManagerSecretReplicationUserManagedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedList <a name="DataGoogleSecretManagerSecretReplicationUserManagedList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretReplicationUserManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```go
func Replicas() DataGoogleSecretManagerSecretReplicationUserManagedReplicasList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretReplicationUserManagedReplicas
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretRotationList <a name="DataGoogleSecretManagerSecretRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretRotationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretRotationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretRotationOutputReference <a name="DataGoogleSecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a>

---


### DataGoogleSecretManagerSecretTopicsList <a name="DataGoogleSecretManagerSecretTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretTopicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretTopicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretTopicsOutputReference <a name="DataGoogleSecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecret"

datagooglesecretmanagersecret.NewDataGoogleSecretManagerSecretTopicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretTopicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretTopics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a>

---



