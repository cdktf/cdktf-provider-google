# `dataprocSessionTemplate` Submodule <a name="`dataprocSessionTemplate` Submodule" id="@cdktf/provider-google.dataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocSessionTemplate <a name="DataprocSessionTemplate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplate(scope: Construct, id: string, config: DataprocSessionTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig">DataprocSessionTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig">DataprocSessionTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig">putEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession">putJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession">putSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig">resetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession">resetJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession">resetSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentConfig` <a name="putEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig"></a>

```typescript
public putEnvironmentConfig(value: DataprocSessionTemplateEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `putJupyterSession` <a name="putJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession"></a>

```typescript
public putJupyterSession(value: DataprocSessionTemplateJupyterSession): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: DataprocSessionTemplateRuntimeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `putSparkConnectSession` <a name="putSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession"></a>

```typescript
public putSparkConnectSession(value: DataprocSessionTemplateSparkConnectSession): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: DataprocSessionTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---

##### `resetEnvironmentConfig` <a name="resetEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig"></a>

```typescript
public resetEnvironmentConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJupyterSession` <a name="resetJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession"></a>

```typescript
public resetJupyterSession(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig"></a>

```typescript
public resetRuntimeConfig(): void
```

##### `resetSparkConnectSession` <a name="resetSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession"></a>

```typescript
public resetSparkConnectSession(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

dataprocSessionTemplate.DataprocSessionTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocSessionTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput">environmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput">jupyterSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput">sparkConnectSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environmentConfig`<sup>Required</sup> <a name="environmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig"></a>

```typescript
public readonly environmentConfig: DataprocSessionTemplateEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `jupyterSession`<sup>Required</sup> <a name="jupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession"></a>

```typescript
public readonly jupyterSession: DataprocSessionTemplateJupyterSessionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: DataprocSessionTemplateRuntimeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `sparkConnectSession`<sup>Required</sup> <a name="sparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession"></a>

```typescript
public readonly sparkConnectSession: DataprocSessionTemplateSparkConnectSessionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocSessionTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `environmentConfigInput`<sup>Optional</sup> <a name="environmentConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput"></a>

```typescript
public readonly environmentConfigInput: DataprocSessionTemplateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jupyterSessionInput`<sup>Optional</sup> <a name="jupyterSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput"></a>

```typescript
public readonly jupyterSessionInput: DataprocSessionTemplateJupyterSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: DataprocSessionTemplateRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `sparkConnectSessionInput`<sup>Optional</sup> <a name="sparkConnectSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```typescript
public readonly sparkConnectSessionInput: DataprocSessionTemplateSparkConnectSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataprocSessionTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocSessionTemplateConfig <a name="DataprocSessionTemplateConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateConfig: dataprocSessionTemplate.DataprocSessionTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name">name</a></code> | <code>string</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location">location</a></code> | <code>string</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#name DataprocSessionTemplate#name}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig"></a>

```typescript
public readonly environmentConfig: DataprocSessionTemplateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#environment_config DataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterSession`<sup>Optional</sup> <a name="jupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession"></a>

```typescript
public readonly jupyterSession: DataprocSessionTemplateJupyterSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#jupyter_session DataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#labels DataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#location DataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}.

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: DataprocSessionTemplateRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#runtime_config DataprocSessionTemplate#runtime_config}

---

##### `sparkConnectSession`<sup>Optional</sup> <a name="sparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```typescript
public readonly sparkConnectSession: DataprocSessionTemplateSparkConnectSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#spark_connect_session DataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocSessionTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#timeouts DataprocSessionTemplate#timeouts}

---

### DataprocSessionTemplateEnvironmentConfig <a name="DataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateEnvironmentConfig: dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `executionConfig`<sup>Optional</sup> <a name="executionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```typescript
public readonly executionConfig: DataprocSessionTemplateEnvironmentConfigExecutionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#execution_config DataprocSessionTemplate#execution_config}

---

##### `peripheralsConfig`<sup>Optional</sup> <a name="peripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```typescript
public readonly peripheralsConfig: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#peripherals_config DataprocSessionTemplate#peripherals_config}

---

### DataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateEnvironmentConfigExecutionConfig: dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">networkTags</a></code> | <code>string[]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">stagingBucket</a></code> | <code>string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetworkUri</a></code> | <code>string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>string</code> | The duration after which the workload will be terminated. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#kms_key DataprocSessionTemplate#kms_key}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#network_tags DataprocSessionTemplate#network_tags}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#service_account DataprocSessionTemplate#service_account}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```typescript
public readonly stagingBucket: string;
```

- *Type:* string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#staging_bucket DataprocSessionTemplate#staging_bucket}

---

##### `subnetworkUri`<sup>Optional</sup> <a name="subnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```typescript
public readonly subnetworkUri: string;
```

- *Type:* string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#subnetwork_uri DataprocSessionTemplate#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#ttl DataprocSessionTemplate#ttl}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateEnvironmentConfigPeripheralsConfig: dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">metastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#metastore_service DataprocSessionTemplate#metastore_service}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#spark_history_server_config DataprocSessionTemplate#spark_history_server_config}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig: dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#dataproc_cluster DataprocSessionTemplate#dataproc_cluster}

---

### DataprocSessionTemplateJupyterSession <a name="DataprocSessionTemplateJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateJupyterSession: dataprocSessionTemplate.DataprocSessionTemplateJupyterSession = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName">displayName</a></code> | <code>string</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel">kernel</a></code> | <code>string</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#display_name DataprocSessionTemplate#display_name}

---

##### `kernel`<sup>Optional</sup> <a name="kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel"></a>

```typescript
public readonly kernel: string;
```

- *Type:* string

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#kernel DataprocSessionTemplate#kernel}

---

### DataprocSessionTemplateRuntimeConfig <a name="DataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateRuntimeConfig: dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage">containerImage</a></code> | <code>string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version">version</a></code> | <code>string</code> | Version of the session runtime. |

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#container_image DataprocSessionTemplate#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#properties DataprocSessionTemplate#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#version DataprocSessionTemplate#version}

---

### DataprocSessionTemplateSparkConnectSession <a name="DataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateSparkConnectSession: dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession = { ... }
```


### DataprocSessionTemplateTimeouts <a name="DataprocSessionTemplateTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

const dataprocSessionTemplateTimeouts: dataprocSessionTemplate.DataprocSessionTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">resetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```typescript
public resetStagingBucket(): void
```

##### `resetSubnetworkUri` <a name="resetSubnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```typescript
public resetSubnetworkUri(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetworkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```typescript
public readonly stagingBucketInput: string;
```

- *Type:* string

---

##### `subnetworkUriInput`<sup>Optional</sup> <a name="subnetworkUriInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```typescript
public readonly subnetworkUriInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```typescript
public readonly stagingBucket: string;
```

- *Type:* string

---

##### `subnetworkUri`<sup>Required</sup> <a name="subnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```typescript
public readonly subnetworkUri: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateEnvironmentConfigExecutionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">putExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">putPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">resetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">resetPeripheralsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionConfig` <a name="putExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```typescript
public putExecutionConfig(value: DataprocSessionTemplateEnvironmentConfigExecutionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `putPeripheralsConfig` <a name="putPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```typescript
public putPeripheralsConfig(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `resetExecutionConfig` <a name="resetExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```typescript
public resetExecutionConfig(): void
```

##### `resetPeripheralsConfig` <a name="resetPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```typescript
public resetPeripheralsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">executionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionConfig`<sup>Required</sup> <a name="executionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```typescript
public readonly executionConfig: DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripheralsConfig`<sup>Required</sup> <a name="peripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```typescript
public readonly peripheralsConfig: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `executionConfigInput`<sup>Optional</sup> <a name="executionConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```typescript
public readonly executionConfigInput: DataprocSessionTemplateEnvironmentConfigExecutionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `peripheralsConfigInput`<sup>Optional</sup> <a name="peripheralsConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```typescript
public readonly peripheralsConfigInput: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```typescript
public putSparkHistoryServerConfig(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```typescript
public resetMetastoreService(): void
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```typescript
public resetSparkHistoryServerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```typescript
public readonly metastoreServiceInput: string;
```

- *Type:* string

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```typescript
public readonly sparkHistoryServerConfigInput: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```typescript
public resetDataprocCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```typescript
public readonly dataprocClusterInput: string;
```

- *Type:* string

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocSessionTemplateJupyterSessionOutputReference <a name="DataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel">resetKernel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetKernel` <a name="resetKernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```typescript
public resetKernel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">kernelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel">kernel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `kernelInput`<sup>Optional</sup> <a name="kernelInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```typescript
public readonly kernelInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kernel`<sup>Required</sup> <a name="kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```typescript
public readonly kernel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateJupyterSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---


### DataprocSessionTemplateRuntimeConfigOutputReference <a name="DataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">effectiveProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveProperties`<sup>Required</sup> <a name="effectiveProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```typescript
public readonly effectiveProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---


### DataprocSessionTemplateSparkConnectSessionOutputReference <a name="DataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocSessionTemplateSparkConnectSession;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---


### DataprocSessionTemplateTimeoutsOutputReference <a name="DataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataprocSessionTemplate } from '@cdktf/provider-google'

new dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocSessionTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---



