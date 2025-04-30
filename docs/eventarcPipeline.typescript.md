# `eventarcPipeline` Submodule <a name="`eventarcPipeline` Submodule" id="@cdktf/provider-google.eventarcPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcPipeline <a name="EventarcPipeline" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline google_eventarc_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipeline(scope: Construct, id: string, config: EventarcPipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig">EventarcPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig">EventarcPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat">putInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations">putMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat">resetInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations">resetMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | EventarcPipelineDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]

---

##### `putInputPayloadFormat` <a name="putInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat"></a>

```typescript
public putInputPayloadFormat(value: EventarcPipelineInputPayloadFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: EventarcPipelineLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---

##### `putMediations` <a name="putMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations"></a>

```typescript
public putMediations(value: IResolvable | EventarcPipelineMediations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: EventarcPipelineRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: EventarcPipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputPayloadFormat` <a name="resetInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat"></a>

```typescript
public resetInputPayloadFormat(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetMediations` <a name="resetMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations"></a>

```typescript
public resetMediations(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

eventarcPipeline.EventarcPipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

eventarcPipeline.EventarcPipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

eventarcPipeline.EventarcPipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

eventarcPipeline.EventarcPipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat">inputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations">mediations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput">inputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput">mediationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations"></a>

```typescript
public readonly destinations: EventarcPipelineDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `inputPayloadFormat`<sup>Required</sup> <a name="inputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat"></a>

```typescript
public readonly inputPayloadFormat: EventarcPipelineInputPayloadFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a>

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: EventarcPipelineLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a>

---

##### `mediations`<sup>Required</sup> <a name="mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations"></a>

```typescript
public readonly mediations: EventarcPipelineMediationsList;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventarcPipelineRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcPipelineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | EventarcPipelineDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputPayloadFormatInput`<sup>Optional</sup> <a name="inputPayloadFormatInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput"></a>

```typescript
public readonly inputPayloadFormatInput: EventarcPipelineInputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: EventarcPipelineLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---

##### `mediationsInput`<sup>Optional</sup> <a name="mediationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput"></a>

```typescript
public readonly mediationsInput: IResolvable | EventarcPipelineMediations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: EventarcPipelineRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventarcPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcPipelineConfig <a name="EventarcPipelineConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineConfig: eventarcPipeline.EventarcPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat">inputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations">mediations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]</code> | mediations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | EventarcPipelineDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#destinations EventarcPipeline#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#location EventarcPipeline#location}

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#pipeline_id EventarcPipeline#pipeline_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#annotations EventarcPipeline#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#crypto_key_name EventarcPipeline#crypto_key_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#display_name EventarcPipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputPayloadFormat`<sup>Optional</sup> <a name="inputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat"></a>

```typescript
public readonly inputPayloadFormat: EventarcPipelineInputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#input_payload_format EventarcPipeline#input_payload_format}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#labels EventarcPipeline#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: EventarcPipelineLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#logging_config EventarcPipeline#logging_config}

---

##### `mediations`<sup>Optional</sup> <a name="mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations"></a>

```typescript
public readonly mediations: IResolvable | EventarcPipelineMediations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#mediations EventarcPipeline#mediations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}.

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventarcPipelineRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#retry_policy EventarcPipeline#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcPipelineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#timeouts EventarcPipeline#timeouts}

---

### EventarcPipelineDestinations <a name="EventarcPipelineDestinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinations: eventarcPipeline.EventarcPipelineDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus">messageBus</a></code> | <code>string</code> | The resource name of the Message Bus to which events should be published. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat">outputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | output_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic">topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow">workflow</a></code> | <code>string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `authenticationConfig`<sup>Optional</sup> <a name="authenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig"></a>

```typescript
public readonly authenticationConfig: EventarcPipelineDestinationsAuthenticationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#authentication_config EventarcPipeline#authentication_config}

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: EventarcPipelineDestinationsHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#http_endpoint EventarcPipeline#http_endpoint}

---

##### `messageBus`<sup>Optional</sup> <a name="messageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus"></a>

```typescript
public readonly messageBus: string;
```

- *Type:* string

The resource name of the Message Bus to which events should be published.

The Message Bus resource should exist in the same project as
the Pipeline. Format:
'projects/{project}/locations/{location}/messageBuses/{message_bus}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#message_bus EventarcPipeline#message_bus}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig"></a>

```typescript
public readonly networkConfig: EventarcPipelineDestinationsNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#network_config EventarcPipeline#network_config}

---

##### `outputPayloadFormat`<sup>Optional</sup> <a name="outputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat"></a>

```typescript
public readonly outputPayloadFormat: EventarcPipelineDestinationsOutputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

output_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#output_payload_format EventarcPipeline#output_payload_format}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#topic EventarcPipeline#topic}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same
project as the Pipeline. Format:
'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#workflow EventarcPipeline#workflow}

---

### EventarcPipelineDestinationsAuthenticationConfig <a name="EventarcPipelineDestinationsAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsAuthenticationConfig: eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc">googleOidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | google_oidc block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | oauth_token block. |

---

##### `googleOidc`<sup>Optional</sup> <a name="googleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc"></a>

```typescript
public readonly googleOidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#google_oidc EventarcPipeline#google_oidc}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: EventarcPipelineDestinationsAuthenticationConfigOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#oauth_token EventarcPipeline#oauth_token}

---

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidc <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsAuthenticationConfigGoogleOidc: eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account email used to generate the OIDC Token. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience">audience</a></code> | <code>string</code> | Audience to be used to generate the OIDC Token. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#audience EventarcPipeline#audience}

---

### EventarcPipelineDestinationsAuthenticationConfigOauthToken <a name="EventarcPipelineDestinationsAuthenticationConfigOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsAuthenticationConfigOauthToken: eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope">scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#scope EventarcPipeline#scope}

---

### EventarcPipelineDestinationsHttpEndpoint <a name="EventarcPipelineDestinationsHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsHttpEndpoint: eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri">uri</a></code> | <code>string</code> | The URI of the HTTP enpdoint. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate">messageBindingTemplate</a></code> | <code>string</code> | The CEL expression used to modify how the destination-bound HTTP request is constructed. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#uri EventarcPipeline#uri}

---

##### `messageBindingTemplate`<sup>Optional</sup> <a name="messageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate"></a>

```typescript
public readonly messageBindingTemplate: string;
```

- *Type:* string

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:
1) Use the output_payload_format_type on the Pipeline.Destination if it
is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:
- If a map named 'headers' exists on the result of the expression,
then its key/value pairs are directly mapped to the HTTP request
headers. The headers values are constructed from the corresponding
value type's canonical representation. If the 'headers' field doesn't
exist then the resulting HTTP request will be the headers of the
CloudEvent HTTP Binding Binary Content Mode representation of the final
message. Note: If the specified binding expression, has updated the
'datacontenttype' field on the message so that it is not the same as
the payload format type but it is still a prefix of the payload format
type, then the 'content-type' header in the 'headers' map is set to
this 'datacontenttype' value.
- If a field named 'body' exists on the result of the expression then
its value is directly mapped to the body of the request. If the value
of the 'body' field is of type bytes or string then it is used for
the HTTP request body as-is, with no conversion. If the body field is
of any other type then it is converted to a JSON string. If the body
field does not exist then the resulting payload of the HTTP request
will be data value of the CloudEvent HTTP Binding Binary Content Mode
representation of the final message as described earlier.
- Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:
- The 'data' field of the incoming CloudEvent message can be accessed
using the 'message.data' value. Subfields of 'message.data' may also be
accessed if an input_payload_format has been specified on the Pipeline.
- Each attribute of the incoming CloudEvent message can be accessed
using the 'message.' value, where  is replaced with the
name of the attribute.
- Existing headers can be accessed in the CEL expression using the
'headers' variable. The 'headers' variable defines a map of key/value
pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
Binary Content Mode representation of the final message as described
earlier. For example, the following CEL expression can be used to
construct an HTTP request by adding an additional header to the HTTP
headers of the CloudEvent HTTP Binding Binary Content Mode
representation of the final message and by overwriting the body of the
request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```
- The default binding for the message payload can be accessed using the
'body' variable. It conatins a string representation of the message
payload in the format specified by the 'output_payload_format' field.
If the 'input_payload_format' field is not set, the 'body'
variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:
- toBase64Url:
map.toBase64Url() -> string
- Converts a CelValue to a base64url encoded string
- toJsonString: map.toJsonString() -> string
- Converts a CelValue to a JSON string
- merge:
map1.merge(map2) -> map3
- Merges the passed CEL map with the existing CEL map the
function is applied to.
- If the same key exists in both maps, if the key's value is type
map both maps are merged else the value from the passed map is
used.
- denormalize:
map.denormalize() -> map
- Denormalizes a CEL map such that every value of type map or key
in the map is expanded to return a single level map.
- The resulting keys are "." separated indices of the map keys.
- For example:
{
"a": 1,
"b": {
"c": 2,
"d": 3
}
"e": [4, 5]
}
.denormalize()
-> {
"a": 1,
"b.c": 2,
"b.d": 3,
"e.0": 4,
"e.1": 5
}
- setField:
map.setField(key, value) -> message
- Sets the field of the message with the given key to the
given value.
- If the field is not present it will be added.
- If the field is present it will be overwritten.
- The key can be a dot separated path to set a field in a nested
message.
- Key must be of type string.
- Value may be any valid type.
- removeFields:
map.removeFields([key1, key2, ...]) -> message
- Removes the fields of the map with the given keys.
- The keys can be a dot separated path to remove a field in a
nested message.
- If a key is not found it will be ignored.
- Keys must be of type string.
- toMap:
[map1, map2, ...].toMap() -> map
- Converts a CEL list of CEL maps to a single CEL map
- toCloudEventJsonWithPayloadFormat:
message.toCloudEventJsonWithPayloadFormat() -> map
- Converts a message to the corresponding structure of JSON
format for CloudEvents.
- It converts 'data' to destination payload format
specified in 'output_payload_format'. If 'output_payload_format' is
not set, the data will remain unchanged.
- It also sets the corresponding datacontenttype of
the CloudEvent, as indicated by
'output_payload_format'. If no
'output_payload_format' is set it will use the value of the
"datacontenttype" attribute on the CloudEvent if present, else
remove "datacontenttype" attribute.
- This function expects that the content of the message will
adhere to the standard CloudEvent format. If it doesn't then this
function will fail.
- The result is a CEL map that corresponds to the JSON
representation of the CloudEvent. To convert that data to a JSON
string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#message_binding_template EventarcPipeline#message_binding_template}

---

### EventarcPipelineDestinationsNetworkConfig <a name="EventarcPipelineDestinationsNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsNetworkConfig: eventarcPipeline.EventarcPipelineDestinationsNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#network_attachment EventarcPipeline#network_attachment}

---

### EventarcPipelineDestinationsOutputPayloadFormat <a name="EventarcPipelineDestinationsOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsOutputPayloadFormat: eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro"></a>

```typescript
public readonly avro: EventarcPipelineDestinationsOutputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json"></a>

```typescript
public readonly json: EventarcPipelineDestinationsOutputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf"></a>

```typescript
public readonly protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineDestinationsOutputPayloadFormatAvro <a name="EventarcPipelineDestinationsOutputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsOutputPayloadFormatAvro: eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `schemaDefinition`<sup>Optional</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineDestinationsOutputPayloadFormatJson <a name="EventarcPipelineDestinationsOutputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsOutputPayloadFormatJson: eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson = { ... }
```


### EventarcPipelineDestinationsOutputPayloadFormatProtobuf <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineDestinationsOutputPayloadFormatProtobuf: eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `schemaDefinition`<sup>Optional</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormat <a name="EventarcPipelineInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineInputPayloadFormat: eventarcPipeline.EventarcPipelineInputPayloadFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro"></a>

```typescript
public readonly avro: EventarcPipelineInputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json"></a>

```typescript
public readonly json: EventarcPipelineInputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf"></a>

```typescript
public readonly protobuf: EventarcPipelineInputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineInputPayloadFormatAvro <a name="EventarcPipelineInputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineInputPayloadFormatAvro: eventarcPipeline.EventarcPipelineInputPayloadFormatAvro = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `schemaDefinition`<sup>Optional</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormatJson <a name="EventarcPipelineInputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineInputPayloadFormatJson: eventarcPipeline.EventarcPipelineInputPayloadFormatJson = { ... }
```


### EventarcPipelineInputPayloadFormatProtobuf <a name="EventarcPipelineInputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineInputPayloadFormatProtobuf: eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `schemaDefinition`<sup>Optional</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineLoggingConfig <a name="EventarcPipelineLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineLoggingConfig: eventarcPipeline.EventarcPipelineLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity">logSeverity</a></code> | <code>string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `logSeverity`<sup>Optional</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#log_severity EventarcPipeline#log_severity}

---

### EventarcPipelineMediations <a name="EventarcPipelineMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineMediations: eventarcPipeline.EventarcPipelineMediations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | transformation block. |

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation"></a>

```typescript
public readonly transformation: EventarcPipelineMediationsTransformation;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#transformation EventarcPipeline#transformation}

---

### EventarcPipelineMediationsTransformation <a name="EventarcPipelineMediationsTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineMediationsTransformation: eventarcPipeline.EventarcPipelineMediationsTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate">transformationTemplate</a></code> | <code>string</code> | The CEL expression template to apply to transform messages. |

---

##### `transformationTemplate`<sup>Optional</sup> <a name="transformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate"></a>

```typescript
public readonly transformationTemplate: string;
```

- *Type:* string

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:
- merge:
map1.merge(map2) -> map3
- Merges the passed CEL map with the existing CEL map the
function is applied to.
- If the same key exists in both maps, if the key's value is type
map both maps are merged else the value from the passed map is
used.
- denormalize:
map.denormalize() -> map
- Denormalizes a CEL map such that every value of type map or key
in the map is expanded to return a single level map.
- The resulting keys are "." separated indices of the map keys.
- For example:
{
"a": 1,
"b": {
"c": 2,
"d": 3
}
"e": [4, 5]
}
.denormalize()
-> {
"a": 1,
"b.c": 2,
"b.d": 3,
"e.0": 4,
"e.1": 5
}
- setField:
map.setField(key, value) -> message
- Sets the field of the message with the given key to the
given value.
- If the field is not present it will be added.
- If the field is present it will be overwritten.
- The key can be a dot separated path to set a field in a nested
message.
- Key must be of type string.
- Value may be any valid type.
- removeFields:
map.removeFields([key1, key2, ...]) -> message
- Removes the fields of the map with the given keys.
- The keys can be a dot separated path to remove a field in a
nested message.
- If a key is not found it will be ignored.
- Keys must be of type string.
- toMap:
[map1, map2, ...].toMap() -> map
- Converts a CEL list of CEL maps to a single CEL map
- toDestinationPayloadFormat():
message.data.toDestinationPayloadFormat() -> string or bytes
- Converts the message data to the destination payload format
specified in Pipeline.Destination.output_payload_format
- This function is meant to be applied to the message.data field.
- If the destination payload format is not set, the function will
return the message data unchanged.
- toCloudEventJsonWithPayloadFormat:
message.toCloudEventJsonWithPayloadFormat() -> map
- Converts a message to the corresponding structure of JSON
format for CloudEvents
- This function applies toDestinationPayloadFormat() to the
message data. It also sets the corresponding datacontenttype of
the CloudEvent, as indicated by
Pipeline.Destination.output_payload_format. If no
output_payload_format is set it will use the existing
datacontenttype on the CloudEvent if present, else leave
datacontenttype absent.
- This function expects that the content of the message will
adhere to the standard CloudEvent format. If it doesn't then this
function will fail.
- The result is a CEL map that corresponds to the JSON
representation of the CloudEvent. To convert that data to a JSON
string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#transformation_template EventarcPipeline#transformation_template}

---

### EventarcPipelineRetryPolicy <a name="EventarcPipelineRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineRetryPolicy: eventarcPipeline.EventarcPipelineRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | The maximum number of delivery attempts for any message. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay">maxRetryDelay</a></code> | <code>string</code> | The maximum amount of seconds to wait between retry attempts. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay">minRetryDelay</a></code> | <code>string</code> | The minimum amount of seconds to wait between retry attempts. |

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#max_attempts EventarcPipeline#max_attempts}

---

##### `maxRetryDelay`<sup>Optional</sup> <a name="maxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay"></a>

```typescript
public readonly maxRetryDelay: string;
```

- *Type:* string

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#max_retry_delay EventarcPipeline#max_retry_delay}

---

##### `minRetryDelay`<sup>Optional</sup> <a name="minRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay"></a>

```typescript
public readonly minRetryDelay: string;
```

- *Type:* string

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#min_retry_delay EventarcPipeline#min_retry_delay}

---

### EventarcPipelineTimeouts <a name="EventarcPipelineTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

const eventarcPipelineTimeouts: eventarcPipeline.EventarcPipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsAuthenticationConfigOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc">putGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc">resetGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleOidc` <a name="putGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc"></a>

```typescript
public putGoogleOidc(value: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken"></a>

```typescript
public putOauthToken(value: EventarcPipelineDestinationsAuthenticationConfigOauthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `resetGoogleOidc` <a name="resetGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc"></a>

```typescript
public resetGoogleOidc(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc">googleOidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput">googleOidcInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleOidc`<sup>Required</sup> <a name="googleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc"></a>

```typescript
public readonly googleOidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a>

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken"></a>

```typescript
public readonly oauthToken: EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a>

---

##### `googleOidcInput`<sup>Optional</sup> <a name="googleOidcInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput"></a>

```typescript
public readonly googleOidcInput: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: EventarcPipelineDestinationsAuthenticationConfigOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsAuthenticationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---


### EventarcPipelineDestinationsHttpEndpointOutputReference <a name="EventarcPipelineDestinationsHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate">resetMessageBindingTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBindingTemplate` <a name="resetMessageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate"></a>

```typescript
public resetMessageBindingTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput">messageBindingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate">messageBindingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageBindingTemplateInput`<sup>Optional</sup> <a name="messageBindingTemplateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput"></a>

```typescript
public readonly messageBindingTemplateInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `messageBindingTemplate`<sup>Required</sup> <a name="messageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate"></a>

```typescript
public readonly messageBindingTemplate: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---


### EventarcPipelineDestinationsList <a name="EventarcPipelineDestinationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get"></a>

```typescript
public get(index: number): EventarcPipelineDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcPipelineDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>[]

---


### EventarcPipelineDestinationsNetworkConfigOutputReference <a name="EventarcPipelineDestinationsNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition">resetSchemaDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaDefinition` <a name="resetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```typescript
public resetSchemaDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsOutputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsOutputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro">putAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf">putProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro">resetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf">resetProtobuf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvro` <a name="putAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro"></a>

```typescript
public putAvro(value: EventarcPipelineDestinationsOutputPayloadFormatAvro): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `putJson` <a name="putJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson"></a>

```typescript
public putJson(value: EventarcPipelineDestinationsOutputPayloadFormatJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `putProtobuf` <a name="putProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf"></a>

```typescript
public putProtobuf(value: EventarcPipelineDestinationsOutputPayloadFormatProtobuf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `resetAvro` <a name="resetAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro"></a>

```typescript
public resetAvro(): void
```

##### `resetJson` <a name="resetJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetProtobuf` <a name="resetProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf"></a>

```typescript
public resetProtobuf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput">avroInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput">protobufInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json"></a>

```typescript
public readonly json: EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf"></a>

```typescript
public readonly protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a>

---

##### `avroInput`<sup>Optional</sup> <a name="avroInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput"></a>

```typescript
public readonly avroInput: EventarcPipelineDestinationsOutputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: EventarcPipelineDestinationsOutputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `protobufInput`<sup>Optional</sup> <a name="protobufInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput"></a>

```typescript
public readonly protobufInput: EventarcPipelineDestinationsOutputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsOutputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition">resetSchemaDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaDefinition` <a name="resetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```typescript
public resetSchemaDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineDestinationsOutputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---


### EventarcPipelineDestinationsOutputReference <a name="EventarcPipelineDestinationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig">putAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint">putHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat">putOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig">resetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus">resetMessageBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat">resetOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfig` <a name="putAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig"></a>

```typescript
public putAuthenticationConfig(value: EventarcPipelineDestinationsAuthenticationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `putHttpEndpoint` <a name="putHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint"></a>

```typescript
public putHttpEndpoint(value: EventarcPipelineDestinationsHttpEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: EventarcPipelineDestinationsNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---

##### `putOutputPayloadFormat` <a name="putOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat"></a>

```typescript
public putOutputPayloadFormat(value: EventarcPipelineDestinationsOutputPayloadFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `resetAuthenticationConfig` <a name="resetAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig"></a>

```typescript
public resetAuthenticationConfig(): void
```

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetMessageBus` <a name="resetMessageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus"></a>

```typescript
public resetMessageBus(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetOutputPayloadFormat` <a name="resetOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat"></a>

```typescript
public resetOutputPayloadFormat(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat">outputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput">authenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput">messageBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput">outputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput">workflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus">messageBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow">workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig"></a>

```typescript
public readonly authenticationConfig: EventarcPipelineDestinationsAuthenticationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a>

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: EventarcPipelineDestinationsHttpEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig"></a>

```typescript
public readonly networkConfig: EventarcPipelineDestinationsNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a>

---

##### `outputPayloadFormat`<sup>Required</sup> <a name="outputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat"></a>

```typescript
public readonly outputPayloadFormat: EventarcPipelineDestinationsOutputPayloadFormatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a>

---

##### `authenticationConfigInput`<sup>Optional</sup> <a name="authenticationConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput"></a>

```typescript
public readonly authenticationConfigInput: EventarcPipelineDestinationsAuthenticationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: EventarcPipelineDestinationsHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---

##### `messageBusInput`<sup>Optional</sup> <a name="messageBusInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput"></a>

```typescript
public readonly messageBusInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: EventarcPipelineDestinationsNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---

##### `outputPayloadFormatInput`<sup>Optional</sup> <a name="outputPayloadFormatInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput"></a>

```typescript
public readonly outputPayloadFormatInput: EventarcPipelineDestinationsOutputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput"></a>

```typescript
public readonly workflowInput: string;
```

- *Type:* string

---

##### `messageBus`<sup>Required</sup> <a name="messageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus"></a>

```typescript
public readonly messageBus: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcPipelineDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>

---


### EventarcPipelineInputPayloadFormatAvroOutputReference <a name="EventarcPipelineInputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition">resetSchemaDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaDefinition` <a name="resetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```typescript
public resetSchemaDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineInputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---


### EventarcPipelineInputPayloadFormatJsonOutputReference <a name="EventarcPipelineInputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineInputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---


### EventarcPipelineInputPayloadFormatOutputReference <a name="EventarcPipelineInputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro">putAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf">putProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro">resetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf">resetProtobuf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvro` <a name="putAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro"></a>

```typescript
public putAvro(value: EventarcPipelineInputPayloadFormatAvro): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---

##### `putJson` <a name="putJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson"></a>

```typescript
public putJson(value: EventarcPipelineInputPayloadFormatJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---

##### `putProtobuf` <a name="putProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf"></a>

```typescript
public putProtobuf(value: EventarcPipelineInputPayloadFormatProtobuf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `resetAvro` <a name="resetAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro"></a>

```typescript
public resetAvro(): void
```

##### `resetJson` <a name="resetJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetProtobuf` <a name="resetProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf"></a>

```typescript
public resetProtobuf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput">avroInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput">protobufInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: EventarcPipelineInputPayloadFormatAvroOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json"></a>

```typescript
public readonly json: EventarcPipelineInputPayloadFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf"></a>

```typescript
public readonly protobuf: EventarcPipelineInputPayloadFormatProtobufOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a>

---

##### `avroInput`<sup>Optional</sup> <a name="avroInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput"></a>

```typescript
public readonly avroInput: EventarcPipelineInputPayloadFormatAvro;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: EventarcPipelineInputPayloadFormatJson;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---

##### `protobufInput`<sup>Optional</sup> <a name="protobufInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput"></a>

```typescript
public readonly protobufInput: EventarcPipelineInputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineInputPayloadFormat;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---


### EventarcPipelineInputPayloadFormatProtobufOutputReference <a name="EventarcPipelineInputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition">resetSchemaDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchemaDefinition` <a name="resetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```typescript
public resetSchemaDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineInputPayloadFormatProtobuf;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---


### EventarcPipelineLoggingConfigOutputReference <a name="EventarcPipelineLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity">resetLogSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogSeverity` <a name="resetLogSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity"></a>

```typescript
public resetLogSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput">logSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity">logSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logSeverityInput`<sup>Optional</sup> <a name="logSeverityInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput"></a>

```typescript
public readonly logSeverityInput: string;
```

- *Type:* string

---

##### `logSeverity`<sup>Required</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---


### EventarcPipelineMediationsList <a name="EventarcPipelineMediationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineMediationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get"></a>

```typescript
public get(index: number): EventarcPipelineMediationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcPipelineMediations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>[]

---


### EventarcPipelineMediationsOutputReference <a name="EventarcPipelineMediationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineMediationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation"></a>

```typescript
public putTransformation(value: EventarcPipelineMediationsTransformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation"></a>

```typescript
public resetTransformation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput">transformationInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation"></a>

```typescript
public readonly transformation: EventarcPipelineMediationsTransformationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a>

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput"></a>

```typescript
public readonly transformationInput: EventarcPipelineMediationsTransformation;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcPipelineMediations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>

---


### EventarcPipelineMediationsTransformationOutputReference <a name="EventarcPipelineMediationsTransformationOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate">resetTransformationTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransformationTemplate` <a name="resetTransformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate"></a>

```typescript
public resetTransformationTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput">transformationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate">transformationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformationTemplateInput`<sup>Optional</sup> <a name="transformationTemplateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput"></a>

```typescript
public readonly transformationTemplateInput: string;
```

- *Type:* string

---

##### `transformationTemplate`<sup>Required</sup> <a name="transformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate"></a>

```typescript
public readonly transformationTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineMediationsTransformation;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---


### EventarcPipelineRetryPolicyOutputReference <a name="EventarcPipelineRetryPolicyOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts">resetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay">resetMaxRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay">resetMinRetryDelay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts"></a>

```typescript
public resetMaxAttempts(): void
```

##### `resetMaxRetryDelay` <a name="resetMaxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay"></a>

```typescript
public resetMaxRetryDelay(): void
```

##### `resetMinRetryDelay` <a name="resetMinRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay"></a>

```typescript
public resetMinRetryDelay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput">maxRetryDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput">minRetryDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay">maxRetryDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay">minRetryDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `maxRetryDelayInput`<sup>Optional</sup> <a name="maxRetryDelayInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput"></a>

```typescript
public readonly maxRetryDelayInput: string;
```

- *Type:* string

---

##### `minRetryDelayInput`<sup>Optional</sup> <a name="minRetryDelayInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput"></a>

```typescript
public readonly minRetryDelayInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `maxRetryDelay`<sup>Required</sup> <a name="maxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay"></a>

```typescript
public readonly maxRetryDelay: string;
```

- *Type:* string

---

##### `minRetryDelay`<sup>Required</sup> <a name="minRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay"></a>

```typescript
public readonly minRetryDelay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcPipelineRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---


### EventarcPipelineTimeoutsOutputReference <a name="EventarcPipelineTimeoutsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventarcPipeline } from '@cdktf/provider-google'

new eventarcPipeline.EventarcPipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

---



