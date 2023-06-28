# `data_google_cloudfunctions_function`

Refer to the Terraform Registory for docs: [`data_google_cloudfunctions_function`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function).

# `dataGoogleCloudfunctionsFunction` Submodule <a name="`dataGoogleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctionsFunction <a name="DataGoogleCloudfunctionsFunction" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction(scope: Construct, id: string, config: DataGoogleCloudfunctionsFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig">DataGoogleCloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig">DataGoogleCloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb">availableMemoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool">buildWorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry">dockerRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository">dockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint">entryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings">ingressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject">sourceArchiveObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp">triggerHttp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector">vpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableMemoryMb`<sup>Required</sup> <a name="availableMemoryMb" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```typescript
public readonly availableMemoryMb: number;
```

- *Type:* number

---

##### `buildEnvironmentVariables`<sup>Required</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```typescript
public readonly buildEnvironmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `buildWorkerPool`<sup>Required</sup> <a name="buildWorkerPool" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```typescript
public readonly buildWorkerPool: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dockerRegistry`<sup>Required</sup> <a name="dockerRegistry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```typescript
public readonly dockerRegistry: string;
```

- *Type:* string

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: string;
```

- *Type:* string

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger"></a>

```typescript
public readonly eventTrigger: DataGoogleCloudfunctionsFunctionEventTriggerList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a>

---

##### `httpsTriggerSecurityLevel`<sup>Required</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```typescript
public readonly httpsTriggerSecurityLevel: string;
```

- *Type:* string

---

##### `httpsTriggerUrl`<sup>Required</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```typescript
public readonly httpsTriggerUrl: string;
```

- *Type:* string

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```typescript
public readonly secretEnvironmentVariables: DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes"></a>

```typescript
public readonly secretVolumes: DataGoogleCloudfunctionsFunctionSecretVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `sourceArchiveBucket`<sup>Required</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```typescript
public readonly sourceArchiveBucket: string;
```

- *Type:* string

---

##### `sourceArchiveObject`<sup>Required</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```typescript
public readonly sourceArchiveObject: string;
```

- *Type:* string

---

##### `sourceRepository`<sup>Required</sup> <a name="sourceRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository"></a>

```typescript
public readonly sourceRepository: DataGoogleCloudfunctionsFunctionSourceRepositoryList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `triggerHttp`<sup>Required</sup> <a name="triggerHttp" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp"></a>

```typescript
public readonly triggerHttp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector"></a>

```typescript
public readonly vpcConnector: string;
```

- *Type:* string

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```typescript
public readonly vpcConnectorEgressSettings: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctionsFunctionConfig <a name="DataGoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionConfig: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project">project</a></code> | <code>string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region">region</a></code> | <code>string</code> | Region of function. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function#name DataGoogleCloudfunctionsFunction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function#project DataGoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/data-sources/cloudfunctions_function#region DataGoogleCloudfunctionsFunction#region}

---

### DataGoogleCloudfunctionsFunctionEventTrigger <a name="DataGoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionEventTrigger: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger = { ... }
```


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy = { ... }
```


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionSecretEnvironmentVariables: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables = { ... }
```


### DataGoogleCloudfunctionsFunctionSecretVolumes <a name="DataGoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionSecretVolumes: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes = { ... }
```


### DataGoogleCloudfunctionsFunctionSecretVolumesVersions <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionSecretVolumesVersions: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions = { ... }
```


### DataGoogleCloudfunctionsFunctionSourceRepository <a name="DataGoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

const dataGoogleCloudfunctionsFunctionSourceRepository: dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">retry</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```typescript
public readonly retry: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### DataGoogleCloudfunctionsFunctionEventTriggerList <a name="DataGoogleCloudfunctionsFunctionEventTriggerList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionEventTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a>

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```typescript
public readonly versions: DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionSecretVolumes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionSecretVolumesVersions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a>

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryList <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get"></a>

```typescript
public get(index: number): DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudfunctionsFunction } from '@cdktf/provider-google'

new dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">deployedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployedUrl`<sup>Required</sup> <a name="deployedUrl" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```typescript
public readonly deployedUrl: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudfunctionsFunctionSourceRepository;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a>

---



