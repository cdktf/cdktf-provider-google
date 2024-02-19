# `dataGoogleCloudIdentityGroupLookup` Submodule <a name="`dataGoogleCloudIdentityGroupLookup` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupLookup <a name="DataGoogleCloudIdentityGroupLookup" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup google_cloud_identity_group_lookup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.NewDataGoogleCloudIdentityGroupLookup(scope Construct, id *string, config DataGoogleCloudIdentityGroupLookupConfig) DataGoogleCloudIdentityGroupLookup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey">PutGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroupKey` <a name="PutGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey"></a>

```go
func PutGroupKey(value DataGoogleCloudIdentityGroupLookupGroupKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupLookup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudIdentityGroupLookup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupLookup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput">GroupKeyInput</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey"></a>

```go
func GroupKey() DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput"></a>

```go
func GroupKeyInput() DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupLookupConfig <a name="DataGoogleCloudIdentityGroupLookupConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

&datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupKey: github.com/cdktf/cdktf-provider-google-go/google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey"></a>

```go
GroupKey DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupLookupGroupKey <a name="DataGoogleCloudIdentityGroupLookupGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

&datagooglecloudidentitygrouplookup.DataGoogleCloudIdentityGroupLookupGroupKey {
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id">Id</a></code> | <code>*string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudidentitygrouplookup"

datagooglecloudidentitygrouplookup.NewDataGoogleCloudIdentityGroupLookupGroupKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudIdentityGroupLookupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---



