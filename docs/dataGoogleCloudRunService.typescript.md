# `data_google_cloud_run_service`

Refer to the Terraform Registory for docs: [`data_google_cloud_run_service`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service).

# `dataGoogleCloudRunService` Submodule <a name="`dataGoogleCloudRunService` Submodule" id="@cdktf/provider-google.dataGoogleCloudRunService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunService <a name="DataGoogleCloudRunService" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service google_cloud_run_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunService(scope: Construct, id: string, config: DataGoogleCloudRunServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig">DataGoogleCloudRunServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig">DataGoogleCloudRunServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName">autogenerateRevisionName</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autogenerateRevisionName`<sup>Required</sup> <a name="autogenerateRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName"></a>

```typescript
public readonly autogenerateRevisionName: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata"></a>

```typescript
public readonly metadata: DataGoogleCloudRunServiceMetadataList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status"></a>

```typescript
public readonly status: DataGoogleCloudRunServiceStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template"></a>

```typescript
public readonly template: DataGoogleCloudRunServiceTemplateList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic"></a>

```typescript
public readonly traffic: DataGoogleCloudRunServiceTrafficList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunServiceConfig <a name="DataGoogleCloudRunServiceConfig" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceConfig: dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name">name</a></code> | <code>string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#id DataGoogleCloudRunService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#project DataGoogleCloudRunService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#location DataGoogleCloudRunService#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#name DataGoogleCloudRunService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#id DataGoogleCloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/data-sources/cloud_run_service#project DataGoogleCloudRunService#project}.

---

### DataGoogleCloudRunServiceMetadata <a name="DataGoogleCloudRunServiceMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceMetadata: dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata = { ... }
```


### DataGoogleCloudRunServiceStatus <a name="DataGoogleCloudRunServiceStatus" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceStatus: dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus = { ... }
```


### DataGoogleCloudRunServiceStatusConditions <a name="DataGoogleCloudRunServiceStatusConditions" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceStatusConditions: dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions = { ... }
```


### DataGoogleCloudRunServiceTemplate <a name="DataGoogleCloudRunServiceTemplate" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplate: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate = { ... }
```


### DataGoogleCloudRunServiceTemplateMetadata <a name="DataGoogleCloudRunServiceTemplateMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateMetadata: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata = { ... }
```


### DataGoogleCloudRunServiceTemplateSpec <a name="DataGoogleCloudRunServiceTemplateSpec" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpec: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainers <a name="DataGoogleCloudRunServiceTemplateSpecContainers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainers: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnv <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnv" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnv: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvFrom: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersPorts <a name="DataGoogleCloudRunServiceTemplateSpecContainersPorts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersPorts: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersResources <a name="DataGoogleCloudRunServiceTemplateSpecContainersResources" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersResources: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecVolumes <a name="DataGoogleCloudRunServiceTemplateSpecVolumes" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecVolumes: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecret <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecret" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecVolumesSecret: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret = { ... }
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTemplateSpecVolumesSecretItems: dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems = { ... }
```


### DataGoogleCloudRunServiceTraffic <a name="DataGoogleCloudRunServiceTraffic" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

const dataGoogleCloudRunServiceTraffic: dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudRunServiceMetadataList <a name="DataGoogleCloudRunServiceMetadataList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceMetadataOutputReference <a name="DataGoogleCloudRunServiceMetadataOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a>

---


### DataGoogleCloudRunServiceStatusConditionsList <a name="DataGoogleCloudRunServiceStatusConditionsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceStatusConditionsOutputReference <a name="DataGoogleCloudRunServiceStatusConditionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a>

---


### DataGoogleCloudRunServiceStatusList <a name="DataGoogleCloudRunServiceStatusList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceStatusOutputReference <a name="DataGoogleCloudRunServiceStatusOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName">latestCreatedRevisionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName">latestReadyRevisionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration">observedGeneration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataGoogleCloudRunServiceStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a>

---

##### `latestCreatedRevisionName`<sup>Required</sup> <a name="latestCreatedRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName"></a>

```typescript
public readonly latestCreatedRevisionName: string;
```

- *Type:* string

---

##### `latestReadyRevisionName`<sup>Required</sup> <a name="latestReadyRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName"></a>

```typescript
public readonly latestReadyRevisionName: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceStatus;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a>

---


### DataGoogleCloudRunServiceTemplateList <a name="DataGoogleCloudRunServiceTemplateList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateMetadataList <a name="DataGoogleCloudRunServiceTemplateMetadataList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateMetadataOutputReference <a name="DataGoogleCloudRunServiceTemplateMetadataOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a>

---


### DataGoogleCloudRunServiceTemplateOutputReference <a name="DataGoogleCloudRunServiceTemplateOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataGoogleCloudRunServiceTemplateMetadataList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec"></a>

```typescript
public readonly spec: DataGoogleCloudRunServiceTemplateSpecList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference">localObjectReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional">optional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localObjectReference`<sup>Required</sup> <a name="localObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference"></a>

```typescript
public readonly localObjectReference: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional"></a>

```typescript
public readonly optional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef">configMapRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configMapRef`<sup>Required</sup> <a name="configMapRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef"></a>

```typescript
public readonly configMapRef: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference">localObjectReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional">optional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localObjectReference`<sup>Required</sup> <a name="localObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference"></a>

```typescript
public readonly localObjectReference: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional"></a>

```typescript
public readonly optional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnv;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersList <a name="DataGoogleCloudRunServiceTemplateSpecContainersList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom">envFrom</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env"></a>

```typescript
public readonly env: DataGoogleCloudRunServiceTemplateSpecContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a>

---

##### `envFrom`<sup>Required</sup> <a name="envFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom"></a>

```typescript
public readonly envFrom: DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: DataGoogleCloudRunServiceTemplateSpecContainersPortsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: DataGoogleCloudRunServiceTemplateSpecContainersResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a>

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainers;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersPorts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesList <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits">limits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests">requests</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a>

---


### DataGoogleCloudRunServiceTemplateSpecList <a name="DataGoogleCloudRunServiceTemplateSpecList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency">containerConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState">servingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConcurrency`<sup>Required</sup> <a name="containerConcurrency" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency"></a>

```typescript
public readonly containerConcurrency: number;
```

- *Type:* number

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers"></a>

```typescript
public readonly containers: DataGoogleCloudRunServiceTemplateSpecContainersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a>

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `servingState`<sup>Required</sup> <a name="servingState" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState"></a>

```typescript
public readonly servingState: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataGoogleCloudRunServiceTemplateSpecVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: DataGoogleCloudRunServiceTemplateSpecVolumesSecretList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecVolumes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTemplateSpecVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---


### DataGoogleCloudRunServiceTrafficList <a name="DataGoogleCloudRunServiceTrafficList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunServiceTrafficOutputReference <a name="DataGoogleCloudRunServiceTrafficOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunService } from '@cdktf/provider-google'

new dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision">latestRevision</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName">revisionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision"></a>

```typescript
public readonly latestRevision: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `revisionName`<sup>Required</sup> <a name="revisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName"></a>

```typescript
public readonly revisionName: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunServiceTraffic;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a>

---



