# `dataGoogleStorageObjectSignedUrl` Submodule <a name="`dataGoogleStorageObjectSignedUrl` Submodule" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageObjectSignedUrl <a name="DataGoogleStorageObjectSignedUrl" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url google_storage_object_signed_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestorageobjectsignedurl"

datagooglestorageobjectsignedurl.NewDataGoogleStorageObjectSignedUrl(scope Construct, id *string, config DataGoogleStorageObjectSignedUrlConfig) DataGoogleStorageObjectSignedUrl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig">DataGoogleStorageObjectSignedUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig">DataGoogleStorageObjectSignedUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5">ResetContentMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders">ResetExtensionHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContentMd5` <a name="ResetContentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5"></a>

```go
func ResetContentMd5()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetExtensionHeaders` <a name="ResetExtensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders"></a>

```go
func ResetExtensionHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestorageobjectsignedurl"

datagooglestorageobjectsignedurl.DataGoogleStorageObjectSignedUrl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestorageobjectsignedurl"

datagooglestorageobjectsignedurl.DataGoogleStorageObjectSignedUrl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestorageobjectsignedurl"

datagooglestorageobjectsignedurl.DataGoogleStorageObjectSignedUrl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl">SignedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input">ContentMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput">ExtensionHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders">ExtensionHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `SignedUrl`<sup>Required</sup> <a name="SignedUrl" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl"></a>

```go
func SignedUrl() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ContentMd5Input`<sup>Optional</sup> <a name="ContentMd5Input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input"></a>

```go
func ContentMd5Input() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ExtensionHeadersInput`<sup>Optional</sup> <a name="ExtensionHeadersInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput"></a>

```go
func ExtensionHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExtensionHeaders`<sup>Required</sup> <a name="ExtensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders"></a>

```go
func ExtensionHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageObjectSignedUrlConfig <a name="DataGoogleStorageObjectSignedUrlConfig" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglestorageobjectsignedurl"

&datagooglestorageobjectsignedurl.DataGoogleStorageObjectSignedUrlConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Path: *string,
	ContentMd5: *string,
	ContentType: *string,
	Credentials: *string,
	Duration: *string,
	ExtensionHeaders: *map[string]*string,
	HttpMethod: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials">Credentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders">ExtensionHeaders</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `ContentMd5`<sup>Optional</sup> <a name="ContentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5"></a>

```go
ContentMd5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `ExtensionHeaders`<sup>Optional</sup> <a name="ExtensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders"></a>

```go
ExtensionHeaders *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



