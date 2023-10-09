# `google_gke_hub_feature`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature).

# `gkeHubFeature` Submodule <a name="`gkeHubFeature` Submodule" id="@cdktf/provider-google.gkeHubFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeature <a name="GkeHubFeature" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature google_gke_hub_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeature(scope Construct, id *string, config GkeHubFeatureConfig) GkeHubFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig">GkeHubFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig">GkeHubFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec"></a>

```go
func PutSpec(value GkeHubFeatureSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts"></a>

```go
func PutTimeouts(value GkeHubFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.GkeHubFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.GkeHubFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.GkeHubFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState">ResourceState</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state">State</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ResourceState`<sup>Required</sup> <a name="ResourceState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState"></a>

```go
func ResourceState() GkeHubFeatureResourceStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec"></a>

```go
func Spec() GkeHubFeatureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state"></a>

```go
func State() GkeHubFeatureStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts"></a>

```go
func Timeouts() GkeHubFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput"></a>

```go
func SpecInput() GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureConfig <a name="GkeHubFeatureConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	Project: *string,
	Spec: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpec,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#id GkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name">Name</a></code> | <code>*string</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#project GkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#location GkeHubFeature#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#id GkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

GCP labels for this Feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#labels GkeHubFeature#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#project GkeHubFeature#project}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec"></a>

```go
Spec GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#spec GkeHubFeature#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts"></a>

```go
Timeouts GkeHubFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#timeouts GkeHubFeature#timeouts}

---

### GkeHubFeatureResourceState <a name="GkeHubFeatureResourceState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureResourceState {

}
```


### GkeHubFeatureSpec <a name="GkeHubFeatureSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpec {
	Fleetobservability: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpecFleetobservability,
	Multiclusteringress: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability">Fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | fleetobservability block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress">Multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | multiclusteringress block. |

---

##### `Fleetobservability`<sup>Optional</sup> <a name="Fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability"></a>

```go
Fleetobservability GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#fleetobservability GkeHubFeature#fleetobservability}

---

##### `Multiclusteringress`<sup>Optional</sup> <a name="Multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress"></a>

```go
Multiclusteringress GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#multiclusteringress GkeHubFeature#multiclusteringress}

---

### GkeHubFeatureSpecFleetobservability <a name="GkeHubFeatureSpecFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpecFleetobservability {
	LoggingConfig: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | logging_config block. |

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig"></a>

```go
LoggingConfig GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#logging_config GkeHubFeature#logging_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig {
	DefaultConfig: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig,
	FleetScopeLogsConfig: github.com/cdktf/cdktf-provider-google-go/google/v10.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | default_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig">FleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | fleet_scope_logs_config block. |

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig"></a>

```go
DefaultConfig GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#default_config GkeHubFeature#default_config}

---

##### `FleetScopeLogsConfig`<sup>Optional</sup> <a name="FleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig"></a>

```go
FleetScopeLogsConfig GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#fleet_scope_logs_config GkeHubFeature#fleet_scope_logs_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode">Mode</a></code> | <code>*string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode">Mode</a></code> | <code>*string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecMulticlusteringress <a name="GkeHubFeatureSpecMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureSpecMulticlusteringress {
	ConfigMembership: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership">ConfigMembership</a></code> | <code>*string</code> | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'. |

---

##### `ConfigMembership`<sup>Required</sup> <a name="ConfigMembership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership"></a>

```go
ConfigMembership *string
```

- *Type:* *string

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#config_membership GkeHubFeature#config_membership}

---

### GkeHubFeatureState <a name="GkeHubFeatureState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureState {

}
```


### GkeHubFeatureStateState <a name="GkeHubFeatureStateState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureStateState {

}
```


### GkeHubFeatureTimeouts <a name="GkeHubFeatureTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

&gkehubfeature.GkeHubFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#create GkeHubFeature#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#update GkeHubFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#create GkeHubFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_feature#update GkeHubFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureResourceStateList <a name="GkeHubFeatureResourceStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureResourceStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeHubFeatureResourceStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get"></a>

```go
func Get(index *f64) GkeHubFeatureResourceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeHubFeatureResourceStateOutputReference <a name="GkeHubFeatureResourceStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureResourceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeHubFeatureResourceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources">HasResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HasResources`<sup>Required</sup> <a name="HasResources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources"></a>

```go
func HasResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureResourceState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig">PutFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig">ResetFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig"></a>

```go
func PutDefaultConfig(value GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `PutFleetScopeLogsConfig` <a name="PutFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig"></a>

```go
func PutFleetScopeLogsConfig(value GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig"></a>

```go
func ResetDefaultConfig()
```

##### `ResetFleetScopeLogsConfig` <a name="ResetFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig"></a>

```go
func ResetFleetScopeLogsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig">FleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput">FleetScopeLogsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a>

---

##### `FleetScopeLogsConfig`<sup>Required</sup> <a name="FleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig"></a>

```go
func FleetScopeLogsConfig() GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a>

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput"></a>

```go
func DefaultConfigInput() GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `FleetScopeLogsConfigInput`<sup>Optional</sup> <a name="FleetScopeLogsConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput"></a>

```go
func FleetScopeLogsConfigInput() GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityOutputReference <a name="GkeHubFeatureSpecFleetobservabilityOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecFleetobservabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecFleetobservabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value GkeHubFeatureSpecFleetobservabilityLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a>

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---


### GkeHubFeatureSpecMulticlusteringressOutputReference <a name="GkeHubFeatureSpecMulticlusteringressOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecMulticlusteringressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecMulticlusteringressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput">ConfigMembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership">ConfigMembership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMembershipInput`<sup>Optional</sup> <a name="ConfigMembershipInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput"></a>

```go
func ConfigMembershipInput() *string
```

- *Type:* *string

---

##### `ConfigMembership`<sup>Required</sup> <a name="ConfigMembership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership"></a>

```go
func ConfigMembership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---


### GkeHubFeatureSpecOutputReference <a name="GkeHubFeatureSpecOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability">PutFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress">PutMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability">ResetFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress">ResetMulticlusteringress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFleetobservability` <a name="PutFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability"></a>

```go
func PutFleetobservability(value GkeHubFeatureSpecFleetobservability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---

##### `PutMulticlusteringress` <a name="PutMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress"></a>

```go
func PutMulticlusteringress(value GkeHubFeatureSpecMulticlusteringress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---

##### `ResetFleetobservability` <a name="ResetFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability"></a>

```go
func ResetFleetobservability()
```

##### `ResetMulticlusteringress` <a name="ResetMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress"></a>

```go
func ResetMulticlusteringress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability">Fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress">Multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput">FleetobservabilityInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput">MulticlusteringressInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fleetobservability`<sup>Required</sup> <a name="Fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability"></a>

```go
func Fleetobservability() GkeHubFeatureSpecFleetobservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a>

---

##### `Multiclusteringress`<sup>Required</sup> <a name="Multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress"></a>

```go
func Multiclusteringress() GkeHubFeatureSpecMulticlusteringressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a>

---

##### `FleetobservabilityInput`<sup>Optional</sup> <a name="FleetobservabilityInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput"></a>

```go
func FleetobservabilityInput() GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---

##### `MulticlusteringressInput`<sup>Optional</sup> <a name="MulticlusteringressInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput"></a>

```go
func MulticlusteringressInput() GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---


### GkeHubFeatureStateList <a name="GkeHubFeatureStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeHubFeatureStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get"></a>

```go
func Get(index *f64) GkeHubFeatureStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeHubFeatureStateOutputReference <a name="GkeHubFeatureStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeHubFeatureStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state">State</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state"></a>

```go
func State() GkeHubFeatureStateStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a>

---


### GkeHubFeatureStateStateList <a name="GkeHubFeatureStateStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureStateStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeHubFeatureStateStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get"></a>

```go
func Get(index *f64) GkeHubFeatureStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeHubFeatureStateStateOutputReference <a name="GkeHubFeatureStateStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureStateStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeHubFeatureStateStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubFeatureStateState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a>

---


### GkeHubFeatureTimeoutsOutputReference <a name="GkeHubFeatureTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v10/gkehubfeature"

gkehubfeature.NewGkeHubFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



