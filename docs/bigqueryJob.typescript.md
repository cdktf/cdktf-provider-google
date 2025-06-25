# `bigqueryJob` Submodule <a name="`bigqueryJob` Submodule" id="@cdktf/provider-google.bigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryJob <a name="BigqueryJob" id="@cdktf/provider-google.bigqueryJob.BigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJob(scope: Construct, id: string, config: BigqueryJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig">BigqueryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig">BigqueryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy">putCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad">putLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy">resetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs">resetJobTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad">resetLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCopy` <a name="putCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy"></a>

```typescript
public putCopy(value: BigqueryJobCopy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `putExtract` <a name="putExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract"></a>

```typescript
public putExtract(value: BigqueryJobExtract): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `putLoad` <a name="putLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad"></a>

```typescript
public putLoad(value: BigqueryJobLoad): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery"></a>

```typescript
public putQuery(value: BigqueryJobQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---

##### `resetCopy` <a name="resetCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy"></a>

```typescript
public resetCopy(): void
```

##### `resetExtract` <a name="resetExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract"></a>

```typescript
public resetExtract(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobTimeoutMs` <a name="resetJobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs"></a>

```typescript
public resetJobTimeoutMs(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoad` <a name="resetLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad"></a>

```typescript
public resetLoad(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

bigqueryJob.BigqueryJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

bigqueryJob.BigqueryJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

bigqueryJob.BigqueryJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

bigqueryJob.BigqueryJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput">copyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput">extractInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput">jobTimeoutMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput">loadInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy"></a>

```typescript
public readonly copy: BigqueryJobCopyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `extract`<sup>Required</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract"></a>

```typescript
public readonly extract: BigqueryJobExtractOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a>

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load"></a>

```typescript
public readonly load: BigqueryJobLoadOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query"></a>

```typescript
public readonly query: BigqueryJobQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status"></a>

```typescript
public readonly status: BigqueryJobStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a>

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `copyInput`<sup>Optional</sup> <a name="copyInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput"></a>

```typescript
public readonly copyInput: BigqueryJobCopy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput"></a>

```typescript
public readonly extractInput: BigqueryJobExtract;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `jobTimeoutMsInput`<sup>Optional</sup> <a name="jobTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput"></a>

```typescript
public readonly jobTimeoutMsInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadInput`<sup>Optional</sup> <a name="loadInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput"></a>

```typescript
public readonly loadInput: BigqueryJobLoad;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput"></a>

```typescript
public readonly queryInput: BigqueryJobQuery;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobTimeoutMs`<sup>Required</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs"></a>

```typescript
public readonly jobTimeoutMs: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryJobConfig <a name="BigqueryJobConfig" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobConfig: bigqueryJob.BigqueryJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId">jobId</a></code> | <code>string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>string</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location">location</a></code> | <code>string</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#job_id BigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy"></a>

```typescript
public readonly copy: BigqueryJobCopy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#copy BigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract"></a>

```typescript
public readonly extract: BigqueryJobExtract;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#extract BigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTimeoutMs`<sup>Optional</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs"></a>

```typescript
public readonly jobTimeoutMs: string;
```

- *Type:* string

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#labels BigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load"></a>

```typescript
public readonly load: BigqueryJobLoad;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#load BigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#location BigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project BigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query"></a>

```typescript
public readonly query: BigqueryJobQuery;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#timeouts BigqueryJob#timeouts}

---

### BigqueryJobCopy <a name="BigqueryJobCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobCopy: bigqueryJob.BigqueryJobCopy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables">sourceTables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]</code> | source_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition">createDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables"></a>

```typescript
public readonly sourceTables: IResolvable | BigqueryJobCopySourceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#source_tables BigqueryJob#source_tables}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobCopyDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobCopyDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobCopyDestinationEncryptionConfiguration <a name="BigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobCopyDestinationEncryptionConfiguration: bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobCopyDestinationTable <a name="BigqueryJobCopyDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobCopyDestinationTable: bigqueryJob.BigqueryJobCopyDestinationTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId">tableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobCopySourceTables <a name="BigqueryJobCopySourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobCopySourceTables: bigqueryJob.BigqueryJobCopySourceTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId">tableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtract <a name="BigqueryJobExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobExtract: bigqueryJob.BigqueryJobExtract = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris">destinationUris</a></code> | <code>string[]</code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression">compression</a></code> | <code>string</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat">destinationFormat</a></code> | <code>string</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader">printHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris"></a>

```typescript
public readonly destinationUris: string[];
```

- *Type:* string[]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_uris BigqueryJob#destination_uris}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#compression BigqueryJob#compression}

---

##### `destinationFormat`<sup>Optional</sup> <a name="destinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat"></a>

```typescript
public readonly destinationFormat: string;
```

- *Type:* string

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_format BigqueryJob#destination_format}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `printHeader`<sup>Optional</sup> <a name="printHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader"></a>

```typescript
public readonly printHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#print_header BigqueryJob#print_header}

---

##### `sourceModel`<sup>Optional</sup> <a name="sourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel"></a>

```typescript
public readonly sourceModel: BigqueryJobExtractSourceModel;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#source_model BigqueryJob#source_model}

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable"></a>

```typescript
public readonly sourceTable: BigqueryJobExtractSourceTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#source_table BigqueryJob#source_table}

---

##### `useAvroLogicalTypes`<sup>Optional</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes"></a>

```typescript
public readonly useAvroLogicalTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#use_avro_logical_types BigqueryJob#use_avro_logical_types}

---

### BigqueryJobExtractSourceModel <a name="BigqueryJobExtractSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobExtractSourceModel: bigqueryJob.BigqueryJobExtractSourceModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId">modelId</a></code> | <code>string</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this model. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#model_id BigqueryJob#model_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtractSourceTable <a name="BigqueryJobExtractSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobExtractSourceTable: bigqueryJob.BigqueryJobExtractSourceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId">tableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoad <a name="BigqueryJobLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobLoad: bigqueryJob.BigqueryJobLoad = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris">sourceUris</a></code> | <code>string[]</code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows">allowJaggedRows</a></code> | <code>boolean \| cdktf.IResolvable</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect">autodetect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition">createDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding">encoding</a></code> | <code>string</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension">jsonExtension</a></code> | <code>string</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords">maxBadRecords</a></code> | <code>number</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker">nullMarker</a></code> | <code>string</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields">projectionFields</a></code> | <code>string[]</code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote">quote</a></code> | <code>string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>string[]</code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows">skipLeadingRows</a></code> | <code>number</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobLoadDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris"></a>

```typescript
public readonly sourceUris: string[];
```

- *Type:* string[]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '\*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#source_uris BigqueryJob#source_uris}

---

##### `allowJaggedRows`<sup>Optional</sup> <a name="allowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows"></a>

```typescript
public readonly allowJaggedRows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#allow_jagged_rows BigqueryJob#allow_jagged_rows}

---

##### `allowQuotedNewlines`<sup>Optional</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines"></a>

```typescript
public readonly allowQuotedNewlines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}

---

##### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect"></a>

```typescript
public readonly autodetect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#autodetect BigqueryJob#autodetect}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobLoadDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#encoding BigqueryJob#encoding}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `ignoreUnknownValues`<sup>Optional</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues"></a>

```typescript
public readonly ignoreUnknownValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#ignore_unknown_values BigqueryJob#ignore_unknown_values}

---

##### `jsonExtension`<sup>Optional</sup> <a name="jsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension"></a>

```typescript
public readonly jsonExtension: string;
```

- *Type:* string

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#json_extension BigqueryJob#json_extension}

---

##### `maxBadRecords`<sup>Optional</sup> <a name="maxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords"></a>

```typescript
public readonly maxBadRecords: number;
```

- *Type:* number

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#max_bad_records BigqueryJob#max_bad_records}

---

##### `nullMarker`<sup>Optional</sup> <a name="nullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker"></a>

```typescript
public readonly nullMarker: string;
```

- *Type:* string

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#null_marker BigqueryJob#null_marker}

---

##### `parquetOptions`<sup>Optional</sup> <a name="parquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions"></a>

```typescript
public readonly parquetOptions: BigqueryJobLoadParquetOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#parquet_options BigqueryJob#parquet_options}

---

##### `projectionFields`<sup>Optional</sup> <a name="projectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields"></a>

```typescript
public readonly projectionFields: string[];
```

- *Type:* string[]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#projection_fields BigqueryJob#projection_fields}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote"></a>

```typescript
public readonly quote: string;
```

- *Type:* string

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#quote BigqueryJob#quote}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions"></a>

```typescript
public readonly schemaUpdateOptions: string[];
```

- *Type:* string[]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `skipLeadingRows`<sup>Optional</sup> <a name="skipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows"></a>

```typescript
public readonly skipLeadingRows: number;
```

- *Type:* number

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#skip_leading_rows BigqueryJob#skip_leading_rows}

---

##### `sourceFormat`<sup>Optional</sup> <a name="sourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#source_format BigqueryJob#source_format}

---

##### `timePartitioning`<sup>Optional</sup> <a name="timePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning"></a>

```typescript
public readonly timePartitioning: BigqueryJobLoadTimePartitioning;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#time_partitioning BigqueryJob#time_partitioning}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobLoadDestinationEncryptionConfiguration <a name="BigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobLoadDestinationEncryptionConfiguration: bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobLoadDestinationTable <a name="BigqueryJobLoadDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobLoadDestinationTable: bigqueryJob.BigqueryJobLoadDestinationTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId">tableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoadParquetOptions <a name="BigqueryJobLoadParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobLoadParquetOptions: bigqueryJob.BigqueryJobLoadParquetOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference">enableListInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString">enumAsString</a></code> | <code>boolean \| cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enableListInference`<sup>Optional</sup> <a name="enableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference"></a>

```typescript
public readonly enableListInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#enable_list_inference BigqueryJob#enable_list_inference}

---

##### `enumAsString`<sup>Optional</sup> <a name="enumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString"></a>

```typescript
public readonly enumAsString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#enum_as_string BigqueryJob#enum_as_string}

---

### BigqueryJobLoadTimePartitioning <a name="BigqueryJobLoadTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobLoadTimePartitioning: bigqueryJob.BigqueryJobLoadTimePartitioning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type">type</a></code> | <code>string</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs">expirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field">field</a></code> | <code>string</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#type BigqueryJob#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#expiration_ms BigqueryJob#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#field BigqueryJob#field}

---

### BigqueryJobQuery <a name="BigqueryJobQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQuery: bigqueryJob.BigqueryJobQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query">query</a></code> | <code>string</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults">allowLargeResults</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition">createDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults">flattenResults</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier">maximumBillingTier</a></code> | <code>number</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>string</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode">parameterMode</a></code> | <code>string</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority">priority</a></code> | <code>string</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>string[]</code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql">useLegacySql</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache">useQueryCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]</code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `allowLargeResults`<sup>Optional</sup> <a name="allowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults"></a>

```typescript
public readonly allowLargeResults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#allow_large_results BigqueryJob#allow_large_results}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `defaultDataset`<sup>Optional</sup> <a name="defaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset"></a>

```typescript
public readonly defaultDataset: BigqueryJobQueryDefaultDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#default_dataset BigqueryJob#default_dataset}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobQueryDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobQueryDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `flattenResults`<sup>Optional</sup> <a name="flattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults"></a>

```typescript
public readonly flattenResults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#flatten_results BigqueryJob#flatten_results}

---

##### `maximumBillingTier`<sup>Optional</sup> <a name="maximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier"></a>

```typescript
public readonly maximumBillingTier: number;
```

- *Type:* number

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#maximum_billing_tier BigqueryJob#maximum_billing_tier}

---

##### `maximumBytesBilled`<sup>Optional</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled"></a>

```typescript
public readonly maximumBytesBilled: string;
```

- *Type:* string

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#parameter_mode BigqueryJob#parameter_mode}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#priority BigqueryJob#priority}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions"></a>

```typescript
public readonly schemaUpdateOptions: string[];
```

- *Type:* string[]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `scriptOptions`<sup>Optional</sup> <a name="scriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions"></a>

```typescript
public readonly scriptOptions: BigqueryJobQueryScriptOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#script_options BigqueryJob#script_options}

---

##### `useLegacySql`<sup>Optional</sup> <a name="useLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql"></a>

```typescript
public readonly useLegacySql: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#use_legacy_sql BigqueryJob#use_legacy_sql}

---

##### `useQueryCache`<sup>Optional</sup> <a name="useQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache"></a>

```typescript
public readonly useQueryCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#use_query_cache BigqueryJob#use_query_cache}

---

##### `userDefinedFunctionResources`<sup>Optional</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources"></a>

```typescript
public readonly userDefinedFunctionResources: IResolvable | BigqueryJobQueryUserDefinedFunctionResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#user_defined_function_resources BigqueryJob#user_defined_function_resources}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobQueryDefaultDataset <a name="BigqueryJobQueryDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQueryDefaultDataset: bigqueryJob.BigqueryJobQueryDefaultDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId">datasetId</a></code> | <code>string</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryDestinationEncryptionConfiguration <a name="BigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQueryDestinationEncryptionConfiguration: bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobQueryDestinationTable <a name="BigqueryJobQueryDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQueryDestinationTable: bigqueryJob.BigqueryJobQueryDestinationTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId">tableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryScriptOptions <a name="BigqueryJobQueryScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQueryScriptOptions: bigqueryJob.BigqueryJobQueryScriptOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement">keyResultStatement</a></code> | <code>string</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget">statementByteBudget</a></code> | <code>string</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>string</code> | Timeout period for each statement in a script. |

---

##### `keyResultStatement`<sup>Optional</sup> <a name="keyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```typescript
public readonly keyResultStatement: string;
```

- *Type:* string

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#key_result_statement BigqueryJob#key_result_statement}

---

##### `statementByteBudget`<sup>Optional</sup> <a name="statementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```typescript
public readonly statementByteBudget: string;
```

- *Type:* string

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#statement_byte_budget BigqueryJob#statement_byte_budget}

---

##### `statementTimeoutMs`<sup>Optional</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```typescript
public readonly statementTimeoutMs: string;
```

- *Type:* string

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#statement_timeout_ms BigqueryJob#statement_timeout_ms}

---

### BigqueryJobQueryUserDefinedFunctionResources <a name="BigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobQueryUserDefinedFunctionResources: bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">inlineCode</a></code> | <code>string</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">resourceUri</a></code> | <code>string</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `inlineCode`<sup>Optional</sup> <a name="inlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#inline_code BigqueryJob#inline_code}

---

##### `resourceUri`<sup>Optional</sup> <a name="resourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#resource_uri BigqueryJob#resource_uri}

---

### BigqueryJobStatus <a name="BigqueryJobStatus" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobStatus: bigqueryJob.BigqueryJobStatus = { ... }
```


### BigqueryJobStatusErrorResult <a name="BigqueryJobStatusErrorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobStatusErrorResult: bigqueryJob.BigqueryJobStatusErrorResult = { ... }
```


### BigqueryJobStatusErrors <a name="BigqueryJobStatusErrors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobStatusErrors: bigqueryJob.BigqueryJobStatusErrors = { ... }
```


### BigqueryJobTimeouts <a name="BigqueryJobTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

const bigqueryJobTimeouts: bigqueryJob.BigqueryJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#create BigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#delete BigqueryJob#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#update BigqueryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#create BigqueryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#delete BigqueryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/bigquery_job#update BigqueryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobCopyDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### BigqueryJobCopyDestinationTableOutputReference <a name="BigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobCopyDestinationTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobCopyDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---


### BigqueryJobCopyOutputReference <a name="BigqueryJobCopyOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobCopyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables">putSourceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```typescript
public putDestinationEncryptionConfiguration(value: BigqueryJobCopyDestinationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable"></a>

```typescript
public putDestinationTable(value: BigqueryJobCopyDestinationTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `putSourceTables` <a name="putSourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables"></a>

```typescript
public putSourceTables(value: IResolvable | BigqueryJobCopySourceTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]

---

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```typescript
public resetCreateDisposition(): void
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```typescript
public resetDestinationEncryptionConfiguration(): void
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable"></a>

```typescript
public resetDestinationTable(): void
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```typescript
public resetWriteDisposition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables">sourceTables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput">sourceTablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition">createDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobCopyDestinationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobCopyDestinationTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a>

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables"></a>

```typescript
public readonly sourceTables: BigqueryJobCopySourceTablesList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a>

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```typescript
public readonly createDispositionInput: string;
```

- *Type:* string

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```typescript
public readonly destinationEncryptionConfigurationInput: BigqueryJobCopyDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```typescript
public readonly destinationTableInput: BigqueryJobCopyDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `sourceTablesInput`<sup>Optional</sup> <a name="sourceTablesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```typescript
public readonly sourceTablesInput: IResolvable | BigqueryJobCopySourceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```typescript
public readonly writeDispositionInput: string;
```

- *Type:* string

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobCopy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---


### BigqueryJobCopySourceTablesList <a name="BigqueryJobCopySourceTablesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobCopySourceTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get"></a>

```typescript
public get(index: number): BigqueryJobCopySourceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryJobCopySourceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>[]

---


### BigqueryJobCopySourceTablesOutputReference <a name="BigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobCopySourceTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryJobCopySourceTables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>

---


### BigqueryJobExtractOutputReference <a name="BigqueryJobExtractOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobExtractOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel">putSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable">putSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat">resetDestinationFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader">resetPrintHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel">resetSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">resetUseAvroLogicalTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceModel` <a name="putSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel"></a>

```typescript
public putSourceModel(value: BigqueryJobExtractSourceModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `putSourceTable` <a name="putSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable"></a>

```typescript
public putSourceTable(value: BigqueryJobExtractSourceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDestinationFormat` <a name="resetDestinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```typescript
public resetDestinationFormat(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetPrintHeader` <a name="resetPrintHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader"></a>

```typescript
public resetPrintHeader(): void
```

##### `resetSourceModel` <a name="resetSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel"></a>

```typescript
public resetSourceModel(): void
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable"></a>

```typescript
public resetSourceTable(): void
```

##### `resetUseAvroLogicalTypes` <a name="resetUseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```typescript
public resetUseAvroLogicalTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput">destinationFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput">destinationUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput">printHeaderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput">sourceModelInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">useAvroLogicalTypesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat">destinationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris">destinationUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader">printHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceModel`<sup>Required</sup> <a name="sourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel"></a>

```typescript
public readonly sourceModel: BigqueryJobExtractSourceModelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a>

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable"></a>

```typescript
public readonly sourceTable: BigqueryJobExtractSourceTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `destinationFormatInput`<sup>Optional</sup> <a name="destinationFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```typescript
public readonly destinationFormatInput: string;
```

- *Type:* string

---

##### `destinationUrisInput`<sup>Optional</sup> <a name="destinationUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```typescript
public readonly destinationUrisInput: string[];
```

- *Type:* string[]

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `printHeaderInput`<sup>Optional</sup> <a name="printHeaderInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```typescript
public readonly printHeaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceModelInput`<sup>Optional</sup> <a name="sourceModelInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```typescript
public readonly sourceModelInput: BigqueryJobExtractSourceModel;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```typescript
public readonly sourceTableInput: BigqueryJobExtractSourceTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `useAvroLogicalTypesInput`<sup>Optional</sup> <a name="useAvroLogicalTypesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```typescript
public readonly useAvroLogicalTypesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `destinationFormat`<sup>Required</sup> <a name="destinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat"></a>

```typescript
public readonly destinationFormat: string;
```

- *Type:* string

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris"></a>

```typescript
public readonly destinationUris: string[];
```

- *Type:* string[]

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `printHeader`<sup>Required</sup> <a name="printHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader"></a>

```typescript
public readonly printHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useAvroLogicalTypes`<sup>Required</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```typescript
public readonly useAvroLogicalTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobExtract;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---


### BigqueryJobExtractSourceModelOutputReference <a name="BigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobExtractSourceModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobExtractSourceModel;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---


### BigqueryJobExtractSourceTableOutputReference <a name="BigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobExtractSourceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobExtractSourceTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---


### BigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobLoadDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### BigqueryJobLoadDestinationTableOutputReference <a name="BigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobLoadDestinationTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobLoadDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---


### BigqueryJobLoadOutputReference <a name="BigqueryJobLoadOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobLoadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions">putParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning">putTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows">resetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines">resetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect">resetAutodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues">resetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension">resetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords">resetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker">resetNullMarker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions">resetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields">resetProjectionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote">resetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows">resetSkipLeadingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat">resetSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning">resetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```typescript
public putDestinationEncryptionConfiguration(value: BigqueryJobLoadDestinationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable"></a>

```typescript
public putDestinationTable(value: BigqueryJobLoadDestinationTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `putParquetOptions` <a name="putParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions"></a>

```typescript
public putParquetOptions(value: BigqueryJobLoadParquetOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---

##### `putTimePartitioning` <a name="putTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning"></a>

```typescript
public putTimePartitioning(value: BigqueryJobLoadTimePartitioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `resetAllowJaggedRows` <a name="resetAllowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```typescript
public resetAllowJaggedRows(): void
```

##### `resetAllowQuotedNewlines` <a name="resetAllowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```typescript
public resetAllowQuotedNewlines(): void
```

##### `resetAutodetect` <a name="resetAutodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect"></a>

```typescript
public resetAutodetect(): void
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```typescript
public resetCreateDisposition(): void
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```typescript
public resetDestinationEncryptionConfiguration(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetIgnoreUnknownValues` <a name="resetIgnoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```typescript
public resetIgnoreUnknownValues(): void
```

##### `resetJsonExtension` <a name="resetJsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension"></a>

```typescript
public resetJsonExtension(): void
```

##### `resetMaxBadRecords` <a name="resetMaxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```typescript
public resetMaxBadRecords(): void
```

##### `resetNullMarker` <a name="resetNullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker"></a>

```typescript
public resetNullMarker(): void
```

##### `resetParquetOptions` <a name="resetParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions"></a>

```typescript
public resetParquetOptions(): void
```

##### `resetProjectionFields` <a name="resetProjectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields"></a>

```typescript
public resetProjectionFields(): void
```

##### `resetQuote` <a name="resetQuote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote"></a>

```typescript
public resetQuote(): void
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```typescript
public resetSchemaUpdateOptions(): void
```

##### `resetSkipLeadingRows` <a name="resetSkipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```typescript
public resetSkipLeadingRows(): void
```

##### `resetSourceFormat` <a name="resetSourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat"></a>

```typescript
public resetSourceFormat(): void
```

##### `resetTimePartitioning` <a name="resetTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```typescript
public resetTimePartitioning(): void
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```typescript
public resetWriteDisposition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput">allowJaggedRowsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">allowQuotedNewlinesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput">autodetectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">ignoreUnknownValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput">jsonExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput">maxBadRecordsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput">nullMarkerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput">parquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput">projectionFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput">quoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput">skipLeadingRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput">sourceUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput">timePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows">allowJaggedRows</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect">autodetect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition">createDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension">jsonExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords">maxBadRecords</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker">nullMarker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields">projectionFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote">quote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows">skipLeadingRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris">sourceUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobLoadDestinationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobLoadDestinationTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a>

---

##### `parquetOptions`<sup>Required</sup> <a name="parquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions"></a>

```typescript
public readonly parquetOptions: BigqueryJobLoadParquetOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `timePartitioning`<sup>Required</sup> <a name="timePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning"></a>

```typescript
public readonly timePartitioning: BigqueryJobLoadTimePartitioningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `allowJaggedRowsInput`<sup>Optional</sup> <a name="allowJaggedRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```typescript
public readonly allowJaggedRowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowQuotedNewlinesInput`<sup>Optional</sup> <a name="allowQuotedNewlinesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```typescript
public readonly allowQuotedNewlinesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autodetectInput`<sup>Optional</sup> <a name="autodetectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput"></a>

```typescript
public readonly autodetectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```typescript
public readonly createDispositionInput: string;
```

- *Type:* string

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```typescript
public readonly destinationEncryptionConfigurationInput: BigqueryJobLoadDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```typescript
public readonly destinationTableInput: BigqueryJobLoadDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `ignoreUnknownValuesInput`<sup>Optional</sup> <a name="ignoreUnknownValuesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```typescript
public readonly ignoreUnknownValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonExtensionInput`<sup>Optional</sup> <a name="jsonExtensionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```typescript
public readonly jsonExtensionInput: string;
```

- *Type:* string

---

##### `maxBadRecordsInput`<sup>Optional</sup> <a name="maxBadRecordsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```typescript
public readonly maxBadRecordsInput: number;
```

- *Type:* number

---

##### `nullMarkerInput`<sup>Optional</sup> <a name="nullMarkerInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```typescript
public readonly nullMarkerInput: string;
```

- *Type:* string

---

##### `parquetOptionsInput`<sup>Optional</sup> <a name="parquetOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```typescript
public readonly parquetOptionsInput: BigqueryJobLoadParquetOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---

##### `projectionFieldsInput`<sup>Optional</sup> <a name="projectionFieldsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```typescript
public readonly projectionFieldsInput: string[];
```

- *Type:* string[]

---

##### `quoteInput`<sup>Optional</sup> <a name="quoteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput"></a>

```typescript
public readonly quoteInput: string;
```

- *Type:* string

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```typescript
public readonly schemaUpdateOptionsInput: string[];
```

- *Type:* string[]

---

##### `skipLeadingRowsInput`<sup>Optional</sup> <a name="skipLeadingRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```typescript
public readonly skipLeadingRowsInput: number;
```

- *Type:* number

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```typescript
public readonly sourceFormatInput: string;
```

- *Type:* string

---

##### `sourceUrisInput`<sup>Optional</sup> <a name="sourceUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```typescript
public readonly sourceUrisInput: string[];
```

- *Type:* string[]

---

##### `timePartitioningInput`<sup>Optional</sup> <a name="timePartitioningInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```typescript
public readonly timePartitioningInput: BigqueryJobLoadTimePartitioning;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```typescript
public readonly writeDispositionInput: string;
```

- *Type:* string

---

##### `allowJaggedRows`<sup>Required</sup> <a name="allowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```typescript
public readonly allowJaggedRows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowQuotedNewlines`<sup>Required</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```typescript
public readonly allowQuotedNewlines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect"></a>

```typescript
public readonly autodetect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `ignoreUnknownValues`<sup>Required</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```typescript
public readonly ignoreUnknownValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonExtension`<sup>Required</sup> <a name="jsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension"></a>

```typescript
public readonly jsonExtension: string;
```

- *Type:* string

---

##### `maxBadRecords`<sup>Required</sup> <a name="maxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```typescript
public readonly maxBadRecords: number;
```

- *Type:* number

---

##### `nullMarker`<sup>Required</sup> <a name="nullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker"></a>

```typescript
public readonly nullMarker: string;
```

- *Type:* string

---

##### `projectionFields`<sup>Required</sup> <a name="projectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields"></a>

```typescript
public readonly projectionFields: string[];
```

- *Type:* string[]

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote"></a>

```typescript
public readonly quote: string;
```

- *Type:* string

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```typescript
public readonly schemaUpdateOptions: string[];
```

- *Type:* string[]

---

##### `skipLeadingRows`<sup>Required</sup> <a name="skipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```typescript
public readonly skipLeadingRows: number;
```

- *Type:* number

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris"></a>

```typescript
public readonly sourceUris: string[];
```

- *Type:* string[]

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobLoad;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---


### BigqueryJobLoadParquetOptionsOutputReference <a name="BigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">resetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">resetEnumAsString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableListInference` <a name="resetEnableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```typescript
public resetEnableListInference(): void
```

##### `resetEnumAsString` <a name="resetEnumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```typescript
public resetEnumAsString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">enableListInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">enumAsStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">enableListInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">enumAsString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableListInferenceInput`<sup>Optional</sup> <a name="enableListInferenceInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```typescript
public readonly enableListInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enumAsStringInput`<sup>Optional</sup> <a name="enumAsStringInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```typescript
public readonly enumAsStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableListInference`<sup>Required</sup> <a name="enableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```typescript
public readonly enableListInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enumAsString`<sup>Required</sup> <a name="enumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```typescript
public readonly enumAsString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobLoadParquetOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---


### BigqueryJobLoadTimePartitioningOutputReference <a name="BigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```typescript
public resetExpirationMs(): void
```

##### `resetField` <a name="resetField" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">expirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```typescript
public readonly expirationMsInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobLoadTimePartitioning;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---


### BigqueryJobQueryDefaultDatasetOutputReference <a name="BigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobQueryDefaultDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---


### BigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobQueryDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### BigqueryJobQueryDestinationTableOutputReference <a name="BigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryDestinationTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobQueryDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---


### BigqueryJobQueryOutputReference <a name="BigqueryJobQueryOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset">putDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions">putScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources">putUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults">resetAllowLargeResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset">resetDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults">resetFlattenResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier">resetMaximumBillingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled">resetMaximumBytesBilled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions">resetScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql">resetUseLegacySql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache">resetUseQueryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">resetUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultDataset` <a name="putDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset"></a>

```typescript
public putDefaultDataset(value: BigqueryJobQueryDefaultDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```typescript
public putDestinationEncryptionConfiguration(value: BigqueryJobQueryDestinationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable"></a>

```typescript
public putDestinationTable(value: BigqueryJobQueryDestinationTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `putScriptOptions` <a name="putScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions"></a>

```typescript
public putScriptOptions(value: BigqueryJobQueryScriptOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `putUserDefinedFunctionResources` <a name="putUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```typescript
public putUserDefinedFunctionResources(value: IResolvable | BigqueryJobQueryUserDefinedFunctionResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]

---

##### `resetAllowLargeResults` <a name="resetAllowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```typescript
public resetAllowLargeResults(): void
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```typescript
public resetCreateDisposition(): void
```

##### `resetDefaultDataset` <a name="resetDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```typescript
public resetDefaultDataset(): void
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```typescript
public resetDestinationEncryptionConfiguration(): void
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable"></a>

```typescript
public resetDestinationTable(): void
```

##### `resetFlattenResults` <a name="resetFlattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults"></a>

```typescript
public resetFlattenResults(): void
```

##### `resetMaximumBillingTier` <a name="resetMaximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```typescript
public resetMaximumBillingTier(): void
```

##### `resetMaximumBytesBilled` <a name="resetMaximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```typescript
public resetMaximumBytesBilled(): void
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode"></a>

```typescript
public resetParameterMode(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```typescript
public resetSchemaUpdateOptions(): void
```

##### `resetScriptOptions` <a name="resetScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions"></a>

```typescript
public resetScriptOptions(): void
```

##### `resetUseLegacySql` <a name="resetUseLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```typescript
public resetUseLegacySql(): void
```

##### `resetUseQueryCache` <a name="resetUseQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```typescript
public resetUseQueryCache(): void
```

##### `resetUserDefinedFunctionResources` <a name="resetUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```typescript
public resetUserDefinedFunctionResources(): void
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```typescript
public resetWriteDisposition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput">allowLargeResultsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput">defaultDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput">flattenResultsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput">maximumBillingTierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput">maximumBytesBilledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput">scriptOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput">useLegacySqlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput">useQueryCacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">userDefinedFunctionResourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults">allowLargeResults</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition">createDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults">flattenResults</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier">maximumBillingTier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode">parameterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql">useLegacySql</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache">useQueryCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultDataset`<sup>Required</sup> <a name="defaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset"></a>

```typescript
public readonly defaultDataset: BigqueryJobQueryDefaultDatasetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```typescript
public readonly destinationEncryptionConfiguration: BigqueryJobQueryDestinationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable"></a>

```typescript
public readonly destinationTable: BigqueryJobQueryDestinationTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a>

---

##### `scriptOptions`<sup>Required</sup> <a name="scriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions"></a>

```typescript
public readonly scriptOptions: BigqueryJobQueryScriptOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `userDefinedFunctionResources`<sup>Required</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```typescript
public readonly userDefinedFunctionResources: BigqueryJobQueryUserDefinedFunctionResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `allowLargeResultsInput`<sup>Optional</sup> <a name="allowLargeResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```typescript
public readonly allowLargeResultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```typescript
public readonly createDispositionInput: string;
```

- *Type:* string

---

##### `defaultDatasetInput`<sup>Optional</sup> <a name="defaultDatasetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```typescript
public readonly defaultDatasetInput: BigqueryJobQueryDefaultDataset;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```typescript
public readonly destinationEncryptionConfigurationInput: BigqueryJobQueryDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```typescript
public readonly destinationTableInput: BigqueryJobQueryDestinationTable;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `flattenResultsInput`<sup>Optional</sup> <a name="flattenResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```typescript
public readonly flattenResultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumBillingTierInput`<sup>Optional</sup> <a name="maximumBillingTierInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```typescript
public readonly maximumBillingTierInput: number;
```

- *Type:* number

---

##### `maximumBytesBilledInput`<sup>Optional</sup> <a name="maximumBytesBilledInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```typescript
public readonly maximumBytesBilledInput: string;
```

- *Type:* string

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```typescript
public readonly parameterModeInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```typescript
public readonly schemaUpdateOptionsInput: string[];
```

- *Type:* string[]

---

##### `scriptOptionsInput`<sup>Optional</sup> <a name="scriptOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```typescript
public readonly scriptOptionsInput: BigqueryJobQueryScriptOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `useLegacySqlInput`<sup>Optional</sup> <a name="useLegacySqlInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```typescript
public readonly useLegacySqlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useQueryCacheInput`<sup>Optional</sup> <a name="useQueryCacheInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```typescript
public readonly useQueryCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDefinedFunctionResourcesInput`<sup>Optional</sup> <a name="userDefinedFunctionResourcesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```typescript
public readonly userDefinedFunctionResourcesInput: IResolvable | BigqueryJobQueryUserDefinedFunctionResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```typescript
public readonly writeDispositionInput: string;
```

- *Type:* string

---

##### `allowLargeResults`<sup>Required</sup> <a name="allowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```typescript
public readonly allowLargeResults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition"></a>

```typescript
public readonly createDisposition: string;
```

- *Type:* string

---

##### `flattenResults`<sup>Required</sup> <a name="flattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults"></a>

```typescript
public readonly flattenResults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumBillingTier`<sup>Required</sup> <a name="maximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```typescript
public readonly maximumBillingTier: number;
```

- *Type:* number

---

##### `maximumBytesBilled`<sup>Required</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```typescript
public readonly maximumBytesBilled: string;
```

- *Type:* string

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```typescript
public readonly schemaUpdateOptions: string[];
```

- *Type:* string[]

---

##### `useLegacySql`<sup>Required</sup> <a name="useLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql"></a>

```typescript
public readonly useLegacySql: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useQueryCache`<sup>Required</sup> <a name="useQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache"></a>

```typescript
public readonly useQueryCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition"></a>

```typescript
public readonly writeDisposition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobQuery;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---


### BigqueryJobQueryScriptOptionsOutputReference <a name="BigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">resetKeyResultStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">resetStatementByteBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">resetStatementTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyResultStatement` <a name="resetKeyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```typescript
public resetKeyResultStatement(): void
```

##### `resetStatementByteBudget` <a name="resetStatementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```typescript
public resetStatementByteBudget(): void
```

##### `resetStatementTimeoutMs` <a name="resetStatementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```typescript
public resetStatementTimeoutMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">keyResultStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">statementByteBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">statementTimeoutMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">keyResultStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">statementByteBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyResultStatementInput`<sup>Optional</sup> <a name="keyResultStatementInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```typescript
public readonly keyResultStatementInput: string;
```

- *Type:* string

---

##### `statementByteBudgetInput`<sup>Optional</sup> <a name="statementByteBudgetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```typescript
public readonly statementByteBudgetInput: string;
```

- *Type:* string

---

##### `statementTimeoutMsInput`<sup>Optional</sup> <a name="statementTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```typescript
public readonly statementTimeoutMsInput: string;
```

- *Type:* string

---

##### `keyResultStatement`<sup>Required</sup> <a name="keyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```typescript
public readonly keyResultStatement: string;
```

- *Type:* string

---

##### `statementByteBudget`<sup>Required</sup> <a name="statementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```typescript
public readonly statementByteBudget: string;
```

- *Type:* string

---

##### `statementTimeoutMs`<sup>Required</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```typescript
public readonly statementTimeoutMs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobQueryScriptOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---


### BigqueryJobQueryUserDefinedFunctionResourcesList <a name="BigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```typescript
public get(index: number): BigqueryJobQueryUserDefinedFunctionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryJobQueryUserDefinedFunctionResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>[]

---


### BigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="BigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">resetInlineCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">resetResourceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInlineCode` <a name="resetInlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```typescript
public resetInlineCode(): void
```

##### `resetResourceUri` <a name="resetResourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```typescript
public resetResourceUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">inlineCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">inlineCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inlineCodeInput`<sup>Optional</sup> <a name="inlineCodeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```typescript
public readonly inlineCodeInput: string;
```

- *Type:* string

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```typescript
public readonly resourceUriInput: string;
```

- *Type:* string

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryJobQueryUserDefinedFunctionResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>

---


### BigqueryJobStatusErrorResultList <a name="BigqueryJobStatusErrorResultList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusErrorResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get"></a>

```typescript
public get(index: number): BigqueryJobStatusErrorResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryJobStatusErrorResultOutputReference <a name="BigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusErrorResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobStatusErrorResult;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a>

---


### BigqueryJobStatusErrorsList <a name="BigqueryJobStatusErrorsList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get"></a>

```typescript
public get(index: number): BigqueryJobStatusErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryJobStatusErrorsOutputReference <a name="BigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobStatusErrors;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a>

---


### BigqueryJobStatusList <a name="BigqueryJobStatusList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get"></a>

```typescript
public get(index: number): BigqueryJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryJobStatusOutputReference <a name="BigqueryJobStatusOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult">errorResult</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorResult`<sup>Required</sup> <a name="errorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult"></a>

```typescript
public readonly errorResult: BigqueryJobStatusErrorResultList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors"></a>

```typescript
public readonly errors: BigqueryJobStatusErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryJobStatus;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a>

---


### BigqueryJobTimeoutsOutputReference <a name="BigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryJob } from '@cdktf/provider-google'

new bigqueryJob.BigqueryJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---



