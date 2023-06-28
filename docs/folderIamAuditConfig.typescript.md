# `google_folder_iam_audit_config`

Refer to the Terraform Registory for docs: [`google_folder_iam_audit_config`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config).

# `folderIamAuditConfig` Submodule <a name="`folderIamAuditConfig` Submodule" id="@cdktf/provider-google.folderIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderIamAuditConfig <a name="FolderIamAuditConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config google_folder_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

new folderIamAuditConfig.FolderIamAuditConfig(scope: Construct, id: string, config: FolderIamAuditConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig">FolderIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig">FolderIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig"></a>

```typescript
public putAuditLogConfig(value: IResolvable | FolderIamAuditConfigAuditLogConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

folderIamAuditConfig.FolderIamAuditConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: FolderIamAuditConfigAuditLogConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput"></a>

```typescript
public readonly auditLogConfigInput: IResolvable | FolderIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderIamAuditConfigAuditLogConfig <a name="FolderIamAuditConfigAuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.Initializer"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

const folderIamAuditConfigAuditLogConfig: folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType">logType</a></code> | <code>string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | Identities that do not cause logging for this type of permission. |

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#log_type FolderIamAuditConfig#log_type}

---

##### `exemptedMembers`<sup>Optional</sup> <a name="exemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#exempted_members FolderIamAuditConfig#exempted_members}

---

### FolderIamAuditConfigConfig <a name="FolderIamAuditConfigConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.Initializer"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

const folderIamAuditConfigConfig: folderIamAuditConfig.FolderIamAuditConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig">auditLogConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service">service</a></code> | <code>string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: IResolvable | FolderIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#audit_log_config FolderIamAuditConfig#audit_log_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#service FolderIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderIamAuditConfigAuditLogConfigList <a name="FolderIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

new folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get"></a>

```typescript
public get(index: number): FolderIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FolderIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>[]

---


### FolderIamAuditConfigAuditLogConfigOutputReference <a name="FolderIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```typescript
import { folderIamAuditConfig } from '@cdktf/provider-google'

new folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">resetExemptedMembers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExemptedMembers` <a name="resetExemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```typescript
public resetExemptedMembers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">exemptedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exemptedMembersInput`<sup>Optional</sup> <a name="exemptedMembersInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```typescript
public readonly exemptedMembersInput: string[];
```

- *Type:* string[]

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `exemptedMembers`<sup>Required</sup> <a name="exemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FolderIamAuditConfigAuditLogConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>

---



