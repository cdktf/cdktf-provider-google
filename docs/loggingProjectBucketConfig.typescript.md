# `loggingProjectBucketConfig` Submodule <a name="`loggingProjectBucketConfig` Submodule" id="@cdktf/provider-google.loggingProjectBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectBucketConfig <a name="LoggingProjectBucketConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config google_logging_project_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

new loggingProjectBucketConfig.LoggingProjectBucketConfig(scope: Construct, id: string, config: LoggingProjectBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig">LoggingProjectBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig">LoggingProjectBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics">resetEnableAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: LoggingProjectBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | LoggingProjectBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableAnalytics` <a name="resetEnableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics"></a>

```typescript
public resetEnableAnalytics(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetLocked"></a>

```typescript
public resetLocked(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingProjectBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoggingProjectBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingProjectBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingProjectBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingProjectBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList">LoggingProjectBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput">enableAnalyticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics">enableAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingProjectBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: LoggingProjectBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList">LoggingProjectBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: LoggingProjectBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableAnalyticsInput`<sup>Optional</sup> <a name="enableAnalyticsInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput"></a>

```typescript
public readonly enableAnalyticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | LoggingProjectBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableAnalytics`<sup>Required</sup> <a name="enableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics"></a>

```typescript
public readonly enableAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectBucketConfigCmekSettings <a name="LoggingProjectBucketConfigCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

const loggingProjectBucketConfigCmekSettings: loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#kms_key_name LoggingProjectBucketConfig#kms_key_name}

---

### LoggingProjectBucketConfigConfig <a name="LoggingProjectBucketConfigConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

const loggingProjectBucketConfigConfig: loggingProjectBucketConfig.LoggingProjectBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project">project</a></code> | <code>string</code> | The parent project that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics">enableAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable log analytics for the bucket. Cannot be disabled once enabled. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#id LoggingProjectBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the bucket is locked. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#location LoggingProjectBucketConfig#location}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The parent project that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#project LoggingProjectBucketConfig#project}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingProjectBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#cmek_settings LoggingProjectBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#description LoggingProjectBucketConfig#description}

---

##### `enableAnalytics`<sup>Optional</sup> <a name="enableAnalytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics"></a>

```typescript
public readonly enableAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable log analytics for the bucket. Cannot be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#enable_analytics LoggingProjectBucketConfig#enable_analytics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#id LoggingProjectBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | LoggingProjectBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#index_configs LoggingProjectBucketConfig#index_configs}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the bucket is locked.

The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#locked LoggingProjectBucketConfig#locked}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}

---

### LoggingProjectBucketConfigIndexConfigs <a name="LoggingProjectBucketConfigIndexConfigs" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

const loggingProjectBucketConfigIndexConfigs: loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#field_path LoggingProjectBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/logging_project_bucket_config#type LoggingProjectBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingProjectBucketConfigCmekSettingsOutputReference <a name="LoggingProjectBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

new loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingProjectBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---


### LoggingProjectBucketConfigIndexConfigsList <a name="LoggingProjectBucketConfigIndexConfigsList" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

new loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): LoggingProjectBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingProjectBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>[]

---


### LoggingProjectBucketConfigIndexConfigsOutputReference <a name="LoggingProjectBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { loggingProjectBucketConfig } from '@cdktf/provider-google'

new loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingProjectBucketConfigIndexConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigIndexConfigs">LoggingProjectBucketConfigIndexConfigs</a>

---



