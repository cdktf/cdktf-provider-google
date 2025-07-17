# `integrationConnectorsEndpointAttachment` Submodule <a name="`integrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsEndpointAttachment <a name="IntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

new integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment(scope: Construct, id: string, config: IntegrationConnectorsEndpointAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig">IntegrationConnectorsEndpointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig">IntegrationConnectorsEndpointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">resetEndpointGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationConnectorsEndpointAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpointGlobalAccess` <a name="resetEndpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```typescript
public resetEndpointGlobalAccess(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationConnectorsEndpointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp">endpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpointGlobalAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointIp`<sup>Required</sup> <a name="endpointIp" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```typescript
public readonly endpointIp: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointGlobalAccessInput`<sup>Optional</sup> <a name="endpointGlobalAccessInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```typescript
public readonly endpointGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```typescript
public readonly serviceAttachmentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointGlobalAccess`<sup>Required</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```typescript
public readonly endpointGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsEndpointAttachmentConfig <a name="IntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

const integrationConnectorsEndpointAttachmentConfig: integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>string</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>string</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```typescript
public readonly endpointGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#endpoint_global_access IntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

### IntegrationConnectorsEndpointAttachmentTimeouts <a name="IntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

const integrationConnectorsEndpointAttachmentTimeouts: integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationConnectorsEndpointAttachment } from '@cdktf/provider-google'

new integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationConnectorsEndpointAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---



