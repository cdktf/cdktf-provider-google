# `google_document_ai_warehouse_document_schema`

Refer to the Terraform Registory for docs: [`google_document_ai_warehouse_document_schema`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema).

# `documentAiWarehouseDocumentSchema` Submodule <a name="`documentAiWarehouseDocumentSchema` Submodule" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiWarehouseDocumentSchema <a name="DocumentAiWarehouseDocumentSchema" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema(scope: Construct, id: string, config: DocumentAiWarehouseDocumentSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions">putPropertyDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder">resetDocumentIsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPropertyDefinitions` <a name="putPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions"></a>

```typescript
public putPropertyDefinitions(value: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts"></a>

```typescript
public putTimeouts(value: DocumentAiWarehouseDocumentSchemaTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `resetDocumentIsFolder` <a name="resetDocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder"></a>

```typescript
public resetDocumentIsFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions">propertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput">documentIsFolderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput">projectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput">propertyDefinitionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder">documentIsFolder</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions"></a>

```typescript
public readonly propertyDefinitions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentIsFolderInput`<sup>Optional</sup> <a name="documentIsFolderInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput"></a>

```typescript
public readonly documentIsFolderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput"></a>

```typescript
public readonly projectNumberInput: string;
```

- *Type:* string

---

##### `propertyDefinitionsInput`<sup>Optional</sup> <a name="propertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput"></a>

```typescript
public readonly propertyDefinitionsInput: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DocumentAiWarehouseDocumentSchemaTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentIsFolder`<sup>Required</sup> <a name="documentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder"></a>

```typescript
public readonly documentIsFolder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiWarehouseDocumentSchemaConfig <a name="DocumentAiWarehouseDocumentSchemaConfig" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaConfig: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName">displayName</a></code> | <code>string</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber">projectNumber</a></code> | <code>string</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions">propertyDefinitions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]</code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder">documentIsFolder</a></code> | <code>boolean \| cdktf.IResolvable</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions"></a>

```typescript
public readonly propertyDefinitions: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `documentIsFolder`<sup>Optional</sup> <a name="documentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder"></a>

```typescript
public readonly documentIsFolder: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocumentAiWarehouseDocumentSchemaTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name">name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName">displayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable">isFilterable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata">isMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable">isRepeatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable">isSearchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions">propertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | property_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance">retrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources">schemaSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `dateTimeTypeOptions`<sup>Optional</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions"></a>

```typescript
public readonly dateTimeTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `enumTypeOptions`<sup>Optional</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions"></a>

```typescript
public readonly enumTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `floatTypeOptions`<sup>Optional</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions"></a>

```typescript
public readonly floatTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `integerTypeOptions`<sup>Optional</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions"></a>

```typescript
public readonly integerTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `isFilterable`<sup>Optional</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable"></a>

```typescript
public readonly isFilterable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `isMetadata`<sup>Optional</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata"></a>

```typescript
public readonly isMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `isRepeatable`<sup>Optional</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable"></a>

```typescript
public readonly isRepeatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `isSearchable`<sup>Optional</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable"></a>

```typescript
public readonly isSearchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `mapTypeOptions`<sup>Optional</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions"></a>

```typescript
public readonly mapTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `propertyTypeOptions`<sup>Optional</sup> <a name="propertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions"></a>

```typescript
public readonly propertyTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

property_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#property_type_options DocumentAiWarehouseDocumentSchema#property_type_options}

---

##### `retrievalImportance`<sup>Optional</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance"></a>

```typescript
public readonly retrievalImportance: string;
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `schemaSources`<sup>Optional</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources"></a>

```typescript
public readonly schemaSources: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `textTypeOptions`<sup>Optional</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions"></a>

```typescript
public readonly textTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `timestampTypeOptions`<sup>Optional</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions"></a>

```typescript
public readonly timestampTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `validationCheckDisabled`<sup>Optional</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```typescript
public readonly validationCheckDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions">propertyDefinitions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]</code> | property_definitions block. |

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions"></a>

```typescript
public readonly propertyDefinitions: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name">name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName">displayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable">isFilterable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata">isMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable">isRepeatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable">isSearchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance">retrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources">schemaSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `dateTimeTypeOptions`<sup>Optional</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions"></a>

```typescript
public readonly dateTimeTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `enumTypeOptions`<sup>Optional</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions"></a>

```typescript
public readonly enumTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `floatTypeOptions`<sup>Optional</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions"></a>

```typescript
public readonly floatTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `integerTypeOptions`<sup>Optional</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions"></a>

```typescript
public readonly integerTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `isFilterable`<sup>Optional</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable"></a>

```typescript
public readonly isFilterable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `isMetadata`<sup>Optional</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata"></a>

```typescript
public readonly isMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `isRepeatable`<sup>Optional</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable"></a>

```typescript
public readonly isRepeatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `isSearchable`<sup>Optional</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable"></a>

```typescript
public readonly isSearchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `mapTypeOptions`<sup>Optional</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions"></a>

```typescript
public readonly mapTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `retrievalImportance`<sup>Optional</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance"></a>

```typescript
public readonly retrievalImportance: string;
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `schemaSources`<sup>Optional</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources"></a>

```typescript
public readonly schemaSources: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `textTypeOptions`<sup>Optional</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions"></a>

```typescript
public readonly textTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `timestampTypeOptions`<sup>Optional</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions"></a>

```typescript
public readonly timestampTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `validationCheckDisabled`<sup>Optional</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```typescript
public readonly validationCheckDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name">name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType">processorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `processorType`<sup>Optional</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name">name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType">processorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `processorType`<sup>Optional</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions = { ... }
```


### DocumentAiWarehouseDocumentSchemaTimeouts <a name="DocumentAiWarehouseDocumentSchemaTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

const documentAiWarehouseDocumentSchemaTimeouts: documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">resetValidationCheckDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidationCheckDisabled` <a name="resetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```typescript
public resetValidationCheckDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">possibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">validationCheckDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `possibleValuesInput`<sup>Optional</sup> <a name="possibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```typescript
public readonly possibleValuesInput: string[];
```

- *Type:* string[]

---

##### `validationCheckDisabledInput`<sup>Optional</sup> <a name="validationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```typescript
public readonly validationCheckDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `validationCheckDisabled`<sup>Required</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```typescript
public readonly validationCheckDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get"></a>

```typescript
public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>[]

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions">putDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions">putEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions">putFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions">putIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions">putMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions">putPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources">putSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions">putTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions">putTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">resetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions">resetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions">resetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions">resetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable">resetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata">resetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable">resetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable">resetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions">resetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions">resetPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance">resetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources">resetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions">resetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions">resetTimestampTypeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeTypeOptions` <a name="putDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```typescript
public putDateTimeTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `putEnumTypeOptions` <a name="putEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```typescript
public putEnumTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `putFloatTypeOptions` <a name="putFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```typescript
public putFloatTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `putIntegerTypeOptions` <a name="putIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```typescript
public putIntegerTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `putMapTypeOptions` <a name="putMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```typescript
public putMapTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `putPropertyTypeOptions` <a name="putPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions"></a>

```typescript
public putPropertyTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `putSchemaSources` <a name="putSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources"></a>

```typescript
public putSchemaSources(value: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]

---

##### `putTextTypeOptions` <a name="putTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```typescript
public putTextTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `putTimestampTypeOptions` <a name="putTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```typescript
public putTimestampTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `resetDateTimeTypeOptions` <a name="resetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```typescript
public resetDateTimeTypeOptions(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnumTypeOptions` <a name="resetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```typescript
public resetEnumTypeOptions(): void
```

##### `resetFloatTypeOptions` <a name="resetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```typescript
public resetFloatTypeOptions(): void
```

##### `resetIntegerTypeOptions` <a name="resetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```typescript
public resetIntegerTypeOptions(): void
```

##### `resetIsFilterable` <a name="resetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```typescript
public resetIsFilterable(): void
```

##### `resetIsMetadata` <a name="resetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```typescript
public resetIsMetadata(): void
```

##### `resetIsRepeatable` <a name="resetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```typescript
public resetIsRepeatable(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetIsSearchable` <a name="resetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```typescript
public resetIsSearchable(): void
```

##### `resetMapTypeOptions` <a name="resetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```typescript
public resetMapTypeOptions(): void
```

##### `resetPropertyTypeOptions` <a name="resetPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions"></a>

```typescript
public resetPropertyTypeOptions(): void
```

##### `resetRetrievalImportance` <a name="resetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```typescript
public resetRetrievalImportance(): void
```

##### `resetSchemaSources` <a name="resetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```typescript
public resetSchemaSources(): void
```

##### `resetTextTypeOptions` <a name="resetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```typescript
public resetTextTypeOptions(): void
```

##### `resetTimestampTypeOptions` <a name="resetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```typescript
public resetTimestampTypeOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions">propertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources">schemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">dateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">enumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">floatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">integerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput">isFilterableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput">isMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput">isRepeatableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput">isSearchableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">mapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput">propertyTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput">retrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput">schemaSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput">textTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">timestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable">isFilterable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata">isMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable">isRepeatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable">isSearchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance">retrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateTimeTypeOptions`<sup>Required</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```typescript
public readonly dateTimeTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `enumTypeOptions`<sup>Required</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```typescript
public readonly enumTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `floatTypeOptions`<sup>Required</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```typescript
public readonly floatTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `integerTypeOptions`<sup>Required</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```typescript
public readonly integerTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `mapTypeOptions`<sup>Required</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```typescript
public readonly mapTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `propertyTypeOptions`<sup>Required</sup> <a name="propertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions"></a>

```typescript
public readonly propertyTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a>

---

##### `schemaSources`<sup>Required</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources"></a>

```typescript
public readonly schemaSources: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a>

---

##### `textTypeOptions`<sup>Required</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```typescript
public readonly textTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `timestampTypeOptions`<sup>Required</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```typescript
public readonly timestampTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `dateTimeTypeOptionsInput`<sup>Optional</sup> <a name="dateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```typescript
public readonly dateTimeTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enumTypeOptionsInput`<sup>Optional</sup> <a name="enumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```typescript
public readonly enumTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `floatTypeOptionsInput`<sup>Optional</sup> <a name="floatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```typescript
public readonly floatTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `integerTypeOptionsInput`<sup>Optional</sup> <a name="integerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```typescript
public readonly integerTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `isFilterableInput`<sup>Optional</sup> <a name="isFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```typescript
public readonly isFilterableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadataInput`<sup>Optional</sup> <a name="isMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```typescript
public readonly isMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRepeatableInput`<sup>Optional</sup> <a name="isRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```typescript
public readonly isRepeatableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSearchableInput`<sup>Optional</sup> <a name="isSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```typescript
public readonly isSearchableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapTypeOptionsInput`<sup>Optional</sup> <a name="mapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```typescript
public readonly mapTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyTypeOptionsInput`<sup>Optional</sup> <a name="propertyTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput"></a>

```typescript
public readonly propertyTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `retrievalImportanceInput`<sup>Optional</sup> <a name="retrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```typescript
public readonly retrievalImportanceInput: string;
```

- *Type:* string

---

##### `schemaSourcesInput`<sup>Optional</sup> <a name="schemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```typescript
public readonly schemaSourcesInput: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]

---

##### `textTypeOptionsInput`<sup>Optional</sup> <a name="textTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```typescript
public readonly textTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `timestampTypeOptionsInput`<sup>Optional</sup> <a name="timestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```typescript
public readonly timestampTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isFilterable`<sup>Required</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable"></a>

```typescript
public readonly isFilterable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadata`<sup>Required</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata"></a>

```typescript
public readonly isMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRepeatable`<sup>Required</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```typescript
public readonly isRepeatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSearchable`<sup>Required</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable"></a>

```typescript
public readonly isSearchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalImportance`<sup>Required</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```typescript
public readonly retrievalImportance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions">putPropertyDefinitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropertyDefinitions` <a name="putPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions"></a>

```typescript
public putPropertyDefinitions(value: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions">propertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput">propertyDefinitionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertyDefinitions`<sup>Required</sup> <a name="propertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions"></a>

```typescript
public readonly propertyDefinitions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a>

---

##### `propertyDefinitionsInput`<sup>Optional</sup> <a name="propertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput"></a>

```typescript
public readonly propertyDefinitionsInput: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">resetValidationCheckDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidationCheckDisabled` <a name="resetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```typescript
public resetValidationCheckDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">possibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">validationCheckDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">validationCheckDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `possibleValuesInput`<sup>Optional</sup> <a name="possibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```typescript
public readonly possibleValuesInput: string[];
```

- *Type:* string[]

---

##### `validationCheckDisabledInput`<sup>Optional</sup> <a name="validationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```typescript
public readonly validationCheckDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `validationCheckDisabled`<sup>Required</sup> <a name="validationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```typescript
public readonly validationCheckDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get"></a>

```typescript
public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>[]

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions">putDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions">putEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions">putFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions">putIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions">putMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources">putSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions">putTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions">putTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">resetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions">resetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions">resetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions">resetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable">resetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata">resetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable">resetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable">resetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions">resetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance">resetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources">resetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions">resetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions">resetTimestampTypeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateTimeTypeOptions` <a name="putDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```typescript
public putDateTimeTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `putEnumTypeOptions` <a name="putEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```typescript
public putEnumTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `putFloatTypeOptions` <a name="putFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```typescript
public putFloatTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `putIntegerTypeOptions` <a name="putIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```typescript
public putIntegerTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `putMapTypeOptions` <a name="putMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```typescript
public putMapTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `putSchemaSources` <a name="putSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources"></a>

```typescript
public putSchemaSources(value: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]

---

##### `putTextTypeOptions` <a name="putTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```typescript
public putTextTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `putTimestampTypeOptions` <a name="putTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```typescript
public putTimestampTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `resetDateTimeTypeOptions` <a name="resetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```typescript
public resetDateTimeTypeOptions(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnumTypeOptions` <a name="resetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```typescript
public resetEnumTypeOptions(): void
```

##### `resetFloatTypeOptions` <a name="resetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```typescript
public resetFloatTypeOptions(): void
```

##### `resetIntegerTypeOptions` <a name="resetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```typescript
public resetIntegerTypeOptions(): void
```

##### `resetIsFilterable` <a name="resetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```typescript
public resetIsFilterable(): void
```

##### `resetIsMetadata` <a name="resetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```typescript
public resetIsMetadata(): void
```

##### `resetIsRepeatable` <a name="resetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```typescript
public resetIsRepeatable(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetIsSearchable` <a name="resetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```typescript
public resetIsSearchable(): void
```

##### `resetMapTypeOptions` <a name="resetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```typescript
public resetMapTypeOptions(): void
```

##### `resetRetrievalImportance` <a name="resetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```typescript
public resetRetrievalImportance(): void
```

##### `resetSchemaSources` <a name="resetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```typescript
public resetSchemaSources(): void
```

##### `resetTextTypeOptions` <a name="resetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```typescript
public resetTextTypeOptions(): void
```

##### `resetTimestampTypeOptions` <a name="resetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```typescript
public resetTimestampTypeOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">dateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions">enumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions">floatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions">integerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions">mapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources">schemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions">textTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions">timestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">dateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">enumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">floatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">integerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput">isFilterableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput">isMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput">isRepeatableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput">isSearchableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">mapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput">retrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput">schemaSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput">textTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">timestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable">isFilterable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata">isMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable">isRepeatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable">isSearchable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance">retrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateTimeTypeOptions`<sup>Required</sup> <a name="dateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```typescript
public readonly dateTimeTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `enumTypeOptions`<sup>Required</sup> <a name="enumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```typescript
public readonly enumTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `floatTypeOptions`<sup>Required</sup> <a name="floatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```typescript
public readonly floatTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `integerTypeOptions`<sup>Required</sup> <a name="integerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```typescript
public readonly integerTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `mapTypeOptions`<sup>Required</sup> <a name="mapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```typescript
public readonly mapTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `schemaSources`<sup>Required</sup> <a name="schemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources"></a>

```typescript
public readonly schemaSources: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a>

---

##### `textTypeOptions`<sup>Required</sup> <a name="textTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```typescript
public readonly textTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `timestampTypeOptions`<sup>Required</sup> <a name="timestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```typescript
public readonly timestampTypeOptions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `dateTimeTypeOptionsInput`<sup>Optional</sup> <a name="dateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```typescript
public readonly dateTimeTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enumTypeOptionsInput`<sup>Optional</sup> <a name="enumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```typescript
public readonly enumTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `floatTypeOptionsInput`<sup>Optional</sup> <a name="floatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```typescript
public readonly floatTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `integerTypeOptionsInput`<sup>Optional</sup> <a name="integerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```typescript
public readonly integerTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `isFilterableInput`<sup>Optional</sup> <a name="isFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```typescript
public readonly isFilterableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadataInput`<sup>Optional</sup> <a name="isMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```typescript
public readonly isMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRepeatableInput`<sup>Optional</sup> <a name="isRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```typescript
public readonly isRepeatableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSearchableInput`<sup>Optional</sup> <a name="isSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```typescript
public readonly isSearchableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapTypeOptionsInput`<sup>Optional</sup> <a name="mapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```typescript
public readonly mapTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retrievalImportanceInput`<sup>Optional</sup> <a name="retrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```typescript
public readonly retrievalImportanceInput: string;
```

- *Type:* string

---

##### `schemaSourcesInput`<sup>Optional</sup> <a name="schemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```typescript
public readonly schemaSourcesInput: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]

---

##### `textTypeOptionsInput`<sup>Optional</sup> <a name="textTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```typescript
public readonly textTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `timestampTypeOptionsInput`<sup>Optional</sup> <a name="timestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```typescript
public readonly timestampTypeOptionsInput: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isFilterable`<sup>Required</sup> <a name="isFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable"></a>

```typescript
public readonly isFilterable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadata`<sup>Required</sup> <a name="isMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata"></a>

```typescript
public readonly isMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRepeatable`<sup>Required</sup> <a name="isRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```typescript
public readonly isRepeatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSearchable`<sup>Required</sup> <a name="isSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable"></a>

```typescript
public readonly isSearchable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalImportance`<sup>Required</sup> <a name="retrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```typescript
public readonly retrievalImportance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get"></a>

```typescript
public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>[]

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">resetProcessorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProcessorType` <a name="resetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```typescript
public resetProcessorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">processorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```typescript
public readonly processorTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get"></a>

```typescript
public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>[]

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">resetProcessorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProcessorType` <a name="resetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```typescript
public resetProcessorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">processorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```typescript
public readonly processorTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference <a name="DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer"></a>

```typescript
import { documentAiWarehouseDocumentSchema } from '@cdktf/provider-google'

new documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocumentAiWarehouseDocumentSchemaTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---



